import {
  CardElement,
  useElements,
  useStripe,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, cartProducts } from "../stores/cart/cartSlice";
import { getAddress, clearAddress } from "../stores/userInfo/addressSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "./elements/Button";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export const StripeWrapper = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

const PaymentForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("card"); // Default to card payment
  const dispatch = useDispatch();
  const cart = useSelector(cartProducts);
  const address = useSelector(getAddress);
  const navigate = useNavigate();
  const elements = useElements();
  const stripe = useStripe();

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = async (e) => {
    dispatch(clearAddress());
    dispatch(clearCart());
    navigate("/payment-success");
    e.preventDefault();

    if (!stripe || !elements || !cart?.length || !address) {
      return;
    }

    setLoading(true);
    try {
      let paymentIntentParams = {
        paymentMethodType: paymentMethod,
        orderItems: cart,
        userId: "",
        shippingAddress: address,
      };

      if (paymentMethod === "card") {
        const { error: backeEndError, clientSecret } = await fetch(
          "http://localhost:8080/create-payment-intent",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(paymentIntentParams),
          }
        ).then((r) => r.json());

        const { error: stripeError, paymentIntent } =
          await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          });
        if (backeEndError || stripeError) {
          setError(backeEndError || stripeError);
        }
      } else {
        // Handle other payment methods here
        // For example, for cash on delivery, you can directly navigate to success
        dispatch(clearAddress());
        dispatch(clearCart());
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <form className="md:w-2/3 md:mx-auto px-3 pt-1" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-lg text-gray-700 mb-2">
          Select Payment Method
        </label>
        <select
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
          className="w-full px-3 py-2 text-gray-700 border rounded shadow-sm focus:outline-none focus:shadow-outline"
        >
          <option value="card">Credit/Debit Card</option>
          <option value="cash">Cash on Delivery</option>
          {/* Add other payment options here */}
        </select>
      </div>
      {paymentMethod === "card" && (
        <div className="mb-4">
          <label
            htmlFor="card-element"
            className="block text-lg text-gray-700 mb-2"
          >
            Please enter your card details
          </label>
          <div className="mb-4">
            <CardElement
              id="card-element"
              className="w-full px-3 py-2 text-gray-700 border rounded shadow-sm focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
      )}
      {error && <span className="text-red-500">{error.message}</span>}
      <div className="flex justify-center">
        <Button
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded shadow"
          type="submit"
          disabled={loading}
          onClick
        >
          {loading ? "Loading..." : "Pay Now"}
        </Button>
      </div>
    </form>
  );
};

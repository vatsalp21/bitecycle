import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import PaymentSuccess from "../pages/PaymentSuccess";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";
import { Footer } from "../components/Footer";
import { About } from "../pages/About";
import { Privacy } from "../components/Privacy";
import { Terms } from "../components/Terms";
import { Liscensing } from "../components/Liscensing";
import NotFoundPage from "../components/NotFoundPage";
import Team from "../components/Team";

const Navigation = () => {
  const productsInCart = useSelector(cartProducts);

  return (
    <BrowserRouter>
      <Header cartCount={productsInCart ? productsInCart.length : 0} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/liscensing" element={<Liscensing />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/team" element={<Team />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;

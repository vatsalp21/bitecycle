const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const db = require("./db");

const app = express();
const productRouter = require("./routes/productRouter");
const userRouter = require("./routes/productRouter");

const Order = require("./models/orderModel");

const env = require("dotenv").config({ path: "../.env" });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

var corsOptions = {
  origin: "http://localhost:3000",
};

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vatsal007pandey@gmail.com",
    pass: "xvkj uyxn ybyg mfdo",
  },
});
app.use(cors());

app.post("/send-email", (req, res) => {
  let mailOptions = {
    from: "vatsal007pandey@gmail.com", // sender address
    to: "vatsal.pandey@bca.christuniversity.in", // list of receivers
    subject: "Order recieved successfully!", // Subject line
    text: "Your order has been receieved and will be delivered by 25th February, 2024.", // plain text body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
  });
});

const calculateOrderAmount = (orderItems) => {
  const initialValue = 0;
  const itemsPrice = orderItems.reduce(
    (previousValue, currentValue) =>
      previousValue + currentValue.price * currentValue.amount,
    initialValue
  );
  return itemsPrice * 100;
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));
app.use(
  express.json({
    verify: function (req, res, buf) {
      if (req.originalUrl.startsWith("/webhook")) {
        req.rawBody = buf.toString();
      }
    },
  })
);
app.post("/webhook", async (req, res) => {
  let data, eventType;

  if (process.env.STRIPE_WEBHOOK_SECRET) {
    let event;
    let signature = req.headers["stripe-signature"];
    try {
      event = stripe.webhooks.constructEvent(
        req.rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`);
      return res.sendStatus(400);
    }
    data = event.data;
    eventType = event.type;
  } else {
    data = req.body.data;
    eventType = req.body.type;
  }

  if (eventType === "payment_intent.succeeded") {
    console.log("💰 Payment captured!");
  } else if (eventType === "payment_intent.payment_failed") {
    console.log("❌ Payment failed.");
  }
  res.sendStatus(200);
});

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Food Ordering" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use("/api/", productRouter);
app.use("/api/", userRouter);

app.post("/create-payment-intent", async (req, res) => {
  try {
    const { orderItems, shippingAddress, userId } = req.body;

    const totalPrice = calculateOrderAmount(orderItems);

    const taxPrice = 0;
    const shippingPrice = 0;

    const order = new Order({
      orderItems,
      shippingAddress,
      paymentMethod: "stripe",
      totalPrice,
      taxPrice,
      shippingPrice,
      user: "",
    });
    console.log(shippingAddress);
    await order.save();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice,
      currency: "usd",
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    res.status(400).json({
      error: {
        message: e.message,
      },
    });
  }
});

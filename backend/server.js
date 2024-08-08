const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./Router/UserRoutes");
const ProductRoutes =require("./Router/ProductRoutes")
const cartRoutes=require("./Router/CartRoutes")
const StripeRoutes=require("./Router/StripeRoutes")

// Load environment variables from .env file
require("dotenv").config();

const PORT = process.env.PORT || 7000;

const mongoURI = process.env.MONGOURI;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(cors({
  origin: 'https://your-drink.vercel.app/',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
}));




app.use("/api/users",userRoutes);


app.use("/api/Product",ProductRoutes);
app.use("/api/cart",cartRoutes);
app.use("/api/stripe",StripeRoutes);
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
  console.log("Connected to the database");
});



app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.listen(PORT, () => {
  console.log(`Server is up : http://localhost:${PORT}`);
});

module.exports = app;

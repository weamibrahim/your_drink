const express = require("express");
const router = new express.Router();
const { verifyToken } = require("../middleware/authToken"); 
const StripeController = require("../controller/StripeController")

router.post('/create-checkout-session',verifyToken, StripeController.stripePayment);

module.exports = router;
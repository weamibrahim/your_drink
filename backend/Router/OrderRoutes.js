const express = require("express");
const router = new express.Router();
const StripeController = require("../controller/StripeController")

const { verifyToken } = require("../middleware/authToken"); 
router.post('/payment',verifyToken, StripeController.charge);

module.exports = router;
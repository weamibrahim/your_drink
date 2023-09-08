const express = require("express");
const router = new express.Router();
const StripeController = require("../controller/StripeController")

router.post('/payment', StripeController.charge);

module.exports = router;
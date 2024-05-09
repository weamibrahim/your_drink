const express = require('express');
const router = express.Router();
const cartController = require('../controller/CartController');

const { verifyToken } = require("../middleware/authToken"); 
router.post('/add-item', verifyToken, cartController.addItemToCart);
router.put('/update-item',verifyToken, cartController.updateCartItemQuantity);
router.put('/remove-item/:userId/:productId',verifyToken, cartController.removeItemFromCart);
router.put('/increment-item/:userId/:productId',verifyToken, cartController.incrementCartItemQuantity);
router.put('/decrement-item/:userId/:productId',verifyToken, cartController.decrementCartItemQuantity);
router.get('/:userId',verifyToken, cartController.getCart);


module.exports = router;

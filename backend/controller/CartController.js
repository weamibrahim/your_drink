const Cart = require("../models/cart");




exports.getCart = async (req, res) => {
  try {
    const { userId } = req.params;

    // Check if userId is defined
    if (!userId) {
      return res.status(400).json({ message: 'userId is missing' });
    }

    // Check if userId is a valid ObjectId
    const mongoose = require('mongoose');
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid userId' });
    }

    const cart = await Cart.findOne({ userId }).populate('items.productId');
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



  exports.addItemToCart = async (req, res) => {

    try {

      const { userId, productId, quantity } = req.body;

      // Check if userId is a valid ObjectId
    const mongoose = require('mongoose');
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid userId' });
    }


      let cart = await Cart.findOne({ userId });
      if (!cart) {
        cart = new Cart({ userId, items: [] });
      }
      const itemIndex = cart.items.findIndex((item) => item.productId.equals(productId));
      if (itemIndex >= 0) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
      const updatedCart = await cart.save();
      res.status(201).json(updatedCart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  exports.updateCartItemQuantity = async (req, res) => {
    try {
      const { userId, productId, quantity } = req.body;
      const cart = await Cart.findOneAndUpdate(
        { userId, 'items.productId': productId },
        { 'items.$.quantity': quantity },
        { new: true }
      );
      res.status(200).json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  exports.removeItemFromCart = async (req, res) => {
    try {
      const { userId, productId } = req.params;
      const cart = await Cart.findOneAndUpdate(
        { userId },
        { $pull: { items: { productId } } },
        { new: true }
      );
      res.status(200).json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

  exports.incrementCartItemQuantity = async (req, res) => {
    try {
      const { userId, productId } = req.params;
      console.log('Incoming incrementCartItem request:', req.params); // Log the request parameters
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
      const item = cart.items.find((item) => item.productId.equals(productId));
      if (!item) {
        return res.status(404).json({ message: 'Item not found in cart' });
      }
      item.quantity += 1;
      const updatedCart = await cart.save();
      res.json(updatedCart);
      console.log('Response sent:', updatedCart); // Log the response
    } catch (error) {
      console.error('Error in incrementCartItem:', error); // Log the error
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  
  exports.decrementCartItemQuantity = async (req, res) => {
    try {
      const { userId, productId } = req.params;
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
      const item = cart.items.find((item) => item.productId.equals(productId));
      if (!item) {
        return res.status(404).json({ message: 'Item not found in cart' });
      }
      if (item.quantity === 1) {
        cart.items = cart.items.filter((item) => !item.productId.equals(productId));
      } else {
        item.quantity -= 1;
      }
      const updatedCart = await cart.save();
      res.json(updatedCart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
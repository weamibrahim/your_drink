const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
userId: {
type: mongoose.Schema.Types.ObjectId,
required: true,
ref: 'User',
},
items: [{
productId: {
type: mongoose.Schema.Types.ObjectId,
required: true,
ref: 'Products',
},
quantity: {
type: Number,
required: true,
default: 0,
},
}],
});

const Cart = mongoose.model('carts', cartSchema);

module.exports = Cart;
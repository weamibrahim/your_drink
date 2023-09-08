const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

  name: { 
    type: String
    , required: [false,"Title is required "] 
    
    },
category: {
    type: String
    , required: [false,"category is required "]
},


  des: { 
    type: String, 
    required: [false, "summary is required"]

     },


  image: {
     type: String ,
    },
 
  price : { 
    type: Number,
     required: [false,"price is required "] },

});

const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;
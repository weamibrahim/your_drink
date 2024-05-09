

const Product = require("../models/Product");

const multer = require('multer');

const path = require('path');

// Specify storage location and file naming
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images'); // Destination folder
    },
    filename: function (req, file, cb) {
       // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname+ "_"+Date.now()+path.extname(file.originalname)); // Use original filename
    }
});
const upload = multer({ storage: storage });


exports.createProduct = [
  upload.single('image'), // 'image' should match the name attribute in your form input
  function(req, res) {
    const { name, des, price ,category} = req.body;
    console.log(req.body)
    const image = req.file;
     // This will contain the uploaded image data
console.log(image)
    if (!(name && des && price && image && category) ) {
      return res.status(400).json({ message: "Please provide all required fields" });
    }

    const newProduct = new Product({ name, des, image: image.filename, price ,category });

    try {
      const result = newProduct.save();
      res.status(200).json({ message: "Product created successfully", newProduct: result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
];

exports.getProductById = function(req, res) {
  Product.findById(req.params.id)
    .then(Product => {
      if (!Product) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json( Product);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message });
    });
 };
 
 exports.getAllProduct = function(req, res) {
  Product.find()
    .then(Products => {
      res.json(Products);
    })
    .catch(err => {
      return res.status(500).json({ message: err.message });
    });
};




















//Delete
 exports.deleteProductById = function(req, res) {
  const id = req.params.id;
  Product.findByIdAndDelete(id)
    .then(result => {
      if (!result) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    })
    .catch(err => {
      return res.status(500).json({ message: err.message });
    });
};



exports.updateProductById = [
  upload.single('image'),
  async (req, res) => {
    try {
      const { name, des, price, category } = req.body;
      let updatedProduct = await Product.findById(req.params.id);

      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product item not found' });
      }

      // Check if a new image is provided
      if (req.file) {
        // Update product with the new image
        updatedProduct.image = req.file.filename;
      }

      // Update other fields
      updatedProduct.name = name;
      updatedProduct.des = des;
      updatedProduct.price = price;
      updatedProduct.category = category;

      updatedProduct = await updatedProduct.save();

      console.log(updatedProduct);

      res.json(updatedProduct);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
];



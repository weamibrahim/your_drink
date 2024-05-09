const express = require('express');
const router = express.Router();
const ProductController = require("../controller/ProductController");
const { verifyToken } = require("../middleware/authToken"); 
const {authorization  } = require("../middleware/authorzation"); 
router.get('/Products', ProductController.getAllProduct);
router.get('/:id', ProductController.getProductById);

// router.post('/', userController.createProduct);
router.post('/create',verifyToken,authorization,ProductController.createProduct);
router.put('/update/:id',verifyToken,authorization, ProductController.updateProductById);
router.delete('/delete/:id',verifyToken,authorization,ProductController.deleteProductById);
// router.get('/Products/category/:category',verifyToken,authorization, ProductController.getProductByName);
module.exports = router;

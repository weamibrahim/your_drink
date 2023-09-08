const express = require('express');
const router = express.Router();
const ProductController = require("../controller/ProductController");
router.get('/Products', ProductController.getAllProduct);
router.get('/:id', ProductController.getProductById);

// router.post('/', userController.createProduct);
router.post('/create',ProductController.createProduct);
router.put('/update/:id', ProductController.updateProductById);
router.delete('/delete/:id',ProductController.deleteProductById);
// router.get('/Products/category/:category', ProductController.getProductByName);
module.exports = router;

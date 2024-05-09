const passport = require("passport");
const { Router } = require("express");

const authController = require("../controller/AuthController");
const userController = require("../controller/UserController");
const { verifyToken } = require("../middleware/authToken"); 
const {authorization  } = require("../middleware/authorzation"); 
const express = require("express");
const router = express.Router();





router.get('/alluser',verifyToken,authorization, userController.getAllUsers);

router.get('/:id',verifyToken,authorization, userController.getUserById);

router.delete('/delete/:id',verifyToken,authorization, userController.deleteUserById);


router.put('/update/:id',verifyToken, userController.updateUserById);


// authRoutes
router.post('/register', authController.register);
router.post('/login', authController.login);




module.exports = router;

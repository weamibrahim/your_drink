const passport = require("passport");
const { Router } = require("express");

const authController = require("../controller/AuthController");
const userController = require("../controller/UserController");
const express = require("express");
const router = express.Router();





router.get('/alluser', userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.delete('/delete/:id', userController.deleteUserById);


router.put('/update/:id',userController.updateUserById);


// authRoutes
router.post('/register', authController.register);
router.post('/login', authController.login);




module.exports = router;

const User = require('../models/user');

const userController = {};
userController.updateUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
     
      const { user_name, email, password, role,  gender,  mobile, address } = req.body;

      const user = await User.findByIdAndUpdate(id, {user_name, email, password, role,  gender,  mobile, address}, { new: true });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  

  console.log("usrafterupdatte",user);
      res.status(200).json({ message: 'User updated successfully', user })
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
  userController.getAllUsers = async (req, res, next) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  };
  
  // get all users for dashboard

  
  userController.getUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };
  
  
  
  //Search
  userController.getUserByName = async (req, res, next) => {
    const name = req.params.name;
     console.log(name);
  
    User.find({ user_name: name })
      .then(users => {
        res.json(users);
      })
      .catch(err => {
        return res.status(500).json({ message: err.message });
      });
  };
  
  
  userController.deleteUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      // Find user by ID and delete
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (err) {
      next(err);
    }
  };
  
  
  
module.exports = userController;
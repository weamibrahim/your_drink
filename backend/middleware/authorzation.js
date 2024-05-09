

const authorization = (req, res, next) => {
    // Assuming the user information is stored in req.user after verifyToken middleware
    if (req.user && req.user.role === 'admin') {
        console.log('User has admin role',req.user.role);
      // User has admin role, proceed to the next middleware or route handler
      next();
    } else {
      // User doesn't have admin role, return a 403 Forbidden response
      return res.status(403).json({ message: 'Permission denied. Admin access required.' });
    }
  };
  
  module.exports = {
    authorization ,
  };
  
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Get token from the Authorization header
  console.log(token)
  if (!token) {
    return res.status(401).json({ message: 'Access Denied. No token provided.' });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET); // Verify token
    next(); // Pass control to next middleware or route
  } catch (err) {
    res.status(400).json({ message: 'Invalid or expired token.' });
  }
  
};




const jwt = require("jsonwebtoken");
require('dotenv').config();


const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token || '';

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

module.exports = { verifyToken };
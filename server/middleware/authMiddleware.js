const jwt = require("jsonwebtoken");
require('dotenv').config();
const loggerMiddlewarereq = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};
const loggerMiddlewareres = (req, res, next) => {
  console.log(`${res.method} ${res.url}`);
  next();
};
const addAccessTokenToHeaders = (req, res, next) => {
  const token = req.token;
  if (token) {
    res.setHeader("Authorization", "Bearer " + token);
  }
  next();
};
const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

module.exports = { loggerMiddlewarereq,loggerMiddlewareres, verifyToken,addAccessTokenToHeaders };
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
  console.log("the is the add access token middleware")



  const token =req.cookies.access_token;
  if (token) {
    console.log("the is the add access token middleware")
    res.setHeader("Authorization", "Bearer " + token);
  }
  next();
};
const verifyToken =async (req, res, next) => {
  /* const token = req.cookies.access_token;

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  } 
 */    const  token =req.cookies.access_token;

  try {
console.log("**********************************************");
console.log(token)
    if (!token) {
      return res.status(403).json("Access indeed Denied");
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

};

module.exports = { loggerMiddlewarereq,loggerMiddlewareres, verifyToken,addAccessTokenToHeaders };
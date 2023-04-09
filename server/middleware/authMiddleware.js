const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json("Access denied. No token provided.");
  }

  try {
    const decoded = jwt.verify(token, "jwtkey");
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).json("Invalid token.");
  }
};

module.exports = authMiddleware;

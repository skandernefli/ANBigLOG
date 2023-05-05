const express = require('express');
const categoryRoute = require("./routes/category");
const cors = require('cors');
const { addAccessTokenToHeaders, verifyToken } = require("./middleware/authMiddleware");
const cookieParser = require('cookie-parser');
const postRoute = require("./routes/post");
const authroute = require('./routes/auth');
const popularRoute=require('./routes/popular');
const postgalleryRoute=require('./routes/postsgallery');
const trendyRoute=require('./routes/trendy');
const latestRoute=require('./routes/latest');

require("dotenv").config();

const App = express();

App.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

App.use(cookieParser());

App.use((req, res, next) => {
  console.log("this is the request header");
  console.log(req.headers); // log the headers of the incoming request
  next();
});

App.use(addAccessTokenToHeaders);

App.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

App.use(express.urlencoded({ extended: true }));
App.use(express.json());

App.use('/server/category', categoryRoute);
App.use('/server/post', postRoute);
App.use('/server/auth', authroute);
App.use('/server/popular', popularRoute);
App.use('/server/postgalley', postgalleryRoute);
App.use('/server/trendy', trendyRoute);
App.use('/server/latest', latestRoute);

module.exports = App;

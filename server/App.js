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
const featureRoute=require('./routes/feature');
const mainvideoRoute=require('./routes/mainvideo');
const managevideopostsRoute=require('./routes/managevideoposts');

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
  var allowedOrigins = ['http://localhost:3000', 'http://localhost:8080'];
  var origin = req.headers.origin;
  if(allowedOrigins.indexOf(origin) > -1){
       res.setHeader('Access-Control-Allow-Origin', origin);}
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
App.use('/server/feature', featureRoute);
App.use('/server/mainvideo', mainvideoRoute);
App.use('/server/managevideoposts', managevideopostsRoute);

module.exports = App;

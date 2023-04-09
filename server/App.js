const express=require('express');
//const connection =require('./db/connection');
const categoryRoute = require("./routes/category");
const cors = require('cors');

const cookieParser = require('cookie-parser');
const postRoute=require("./routes/post");
const authroute=require('./routes/auth');

const App =express();
App.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
App.use(cookieParser());

App.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  
  });
App.use(express.urlencoded({extended: true}));
App.use(express.json());
App.use('/server/category',categoryRoute);
App.use('/server/post',postRoute);
App.use('/server/auth',authroute);
module.exports=App;

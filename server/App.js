const express=require('express');
//const connection =require('./db/connection');
const categoryRoute = require("./routes/category");
const cookieParser = require('cookie-parser');
const postRoute=require("./routes/post");
const authroute=require('./routes/auth');

const App =express();
App.use(cookieParser());

App.use(express.urlencoded({extended: true}));
App.use(express.json());
App.use('/server/category',categoryRoute);
App.use('/server/post',postRoute);
App.use('/server/auth',authroute);
module.exports=App;

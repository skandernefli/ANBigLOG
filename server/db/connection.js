const mysql=require('mysql');
require('dotenv').config();

var connection=mysql.createConnection({
    port:process.env.PORT,
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})
connection.connect((err)=>{
    if(!err){
        console.log("connected");
    }
    else{
        console.log(err);
    }
})
module.exports =connection
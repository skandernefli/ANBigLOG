const mysql=require('mysql');

var connection=mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"5574257155742571",
    database:"tnthere"
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
const connection=require('../db/connection');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const createAdmin=(req,res)=>{
    //check authorization
    const q="SELECT * FROM authorizedtable WHERE authorized = ? ";
    connection.query(q, [req.body.authorized],(err,data)=>{
    if(err) return res.status(500).json(err);
    if(data.length===0) return res.status(404).json("unothorized")
    const q= "SELECT * FROM admins WHERE name = ?";
    connection.query(q,[req.body.name],(err, data)=>{
        if(err) return res.status(500).json(err);
        if(data.length) return res.status(409).json("administrator already exists!");
        //hashing the password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        
        const q="INSERT INTO admins(`name`,`password`) values (?)";
        const values=[req.body.name, hash];
        connection.query(q,[values],(err,data)=>{
            if(err) return res.status(500).json(err);
            return res.status(200).json("adminstrator has been created");           
        });
    });});
};
const login=(req,res)=>{
    //checking user
    const q="SELECT * FROM admins WHERE name = ?"
    connection.query(q,[req.body.name],(err,data)=>{
        if (err) return res.status(500).json(err);
        if(data.length===0) return res.status(404).json("user does not exist")
    //checking password
    const isPasswordCORRECT = bcrypt.compareSync(
        req.body.password,data[0].password
    );
    if(!isPasswordCORRECT)
    return res.status(400).json("wrong username or password");
    const token=jwt.sign({id: data[0].id},"jwtkey");
    const{password, ...other}=data[0];
     res 
    .cookie("access_token",token, {
        httpOnly : true,
    })
    .status(200)
    .json(other);

    });
};
 const logout = (req, res) => {
    res.clearCookie("access_token",{
      sameSite:"none",
      secure:true
    }).status(200).json("User has been logged out.")
  };

  module.exports = {login, logout ,createAdmin}
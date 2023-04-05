const connection=require('../db/connection');
const jwt=require('jsonwebtoken');

const postCategory=(req,res)=>{
    const token = req.cookies.access_token;
    console.log(token);
    if (!token) return res.status(401).json("not authenticated");
     jwt.verify(token,"jwtkey",(err, userInfo)=>{
        if(err) return res.status(403).json("token not valid!");
        const q="INSERT INTO categories(`name`,`admin_id`) VALUES (?)";
        const values=[
            req.body.name,
            userInfo.id,
        ];
        connection.query(q,[values],(err,data)=>{
            if (err) return res.status(500).json("err");
            return res.json("categorie has been created!")
        })
     })
}
const getCategories=(req,res)=>{
    const q = "SELECT * FROM categories";
    connection.query(q,[req.query.cat],(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data)
    })
}
const deleteCategory=(req,res)=>{
    const token=req.cookies.access_token;
    if (!token) return res.status(401).json("user not authenticated");
    jwt.verify(token,"jwtkey",(err,userInfo)=>{
        if(err) return res.status(403).json("token nt valid!");
        const categorieId=req.params.id;
        const q="DELETE FROM categories WHERE `id`= ? AND `admin_id`= ?";
        connection.query(q,[categorieId,userInfo.id],(err,data)=>{
            if (err) return res.status(500).json(err);
            return res.json("categorie deleted");
        })
    })
}
const updateCategory=(req,res)=>{
    const token=req.cookies.access_token;
    if(!token) return res.status(401).json("not authenticated");
    jwt.verify(token,"jwtkey",(err,userInfo)=>{
        if (err) return res.status(403).json("token is not valid!");
        const categorieId=req.params.id;
        q="UPDATE categories set `name`= ? where `id` = ? AND admin_id = ?";
        const values=[req.body.name]
        connection.query(q, [...values,categorieId,userInfo.id],(err,data)=>{
            if (err) return res.status(500).json(err);
            return res.json("categorie created!")
        })
    })
}
module.exports={postCategory, getCategories, deleteCategory,updateCategory}
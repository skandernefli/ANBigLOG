const connection=require('../db/connection');
const jwt=require('jsonwebtoken');
const postModel = require('../postmodel/postModel');
const getPost=(req,res)=>{
    const q = "SELECT `title`,`content`,`created_at`,`updated_at` FROM posts WHERE id=?";
    connection.query(q,[req.params.id],(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data[0])
    })
}
const postPost=(req,res)=>{
    const userInfo=req.user;
        const post=new postModel({
            title: req.body.title,
            intro:req.body.intro,
            content:req.body.content,
        });
        post.save()
        .then((result)=>{
             let categorie_id;
            const q = "SELECT `id` FROM categories WHERE `name`=?";
            connection.query(q,[req.body.categorie_name],(err,data)=>{
                if(err) return res.status(500).json(err);
                categorie_id=data[0].id
                const values=[
                    req.body.title,
                    result._id,
                    categorie_id,
                    userInfo.id,
                ];
                const q="INSERT INTO posts(`title`,`post_id`,`categorie_id`,`admin_id`) VALUES (?)";
                connection.query(q,[values],(err,data)=>{
                    if (err) {
                        console.log("err");
                        return res.status(500).json(err);}
                    return res.status(201).json("post has been created!")
                })
    
            })
            
           
         } ).catch(error=>{
            console.log(error);
            res.status(500).json({
                error:error
            });
        });
        
     
}
const getPosts=(req,res)=>{
    const q = "SELECT * FROM posts";
    connection.query(q,[req.query.cat],(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data)
    })
}
const deletePost=(req,res)=>{
    const token=req.cookies.access_token;
    if (!token) return res.status(401).json("user not authenticated");
    jwt.verify(token,"jwtkey",(err,userInfo)=>{
        if(err) return res.status(403).json("token nt valid!");
        const postId=req.params.id;
        const q="DELETE FROM posts WHERE `id`= ? AND `admin_id`= ?";
        connection.query(q,[postId,userInfo.id],(err,data)=>{
            if (err) return res.status(500).json(err);
            return res.json("post deleted");
        })
    })
}
const updatePost=(req,res)=>{
    const token=req.cookies.access_token;
    if(!token) return res.status(401).json("not authenticated");
    jwt.verify(token,"jwtkey",(err,userInfo)=>{
        if (err) return res.status(403).json("token is not valid!");
        const postId=req.params.id;
        q=
        "UPDATE posts SET `title`=?,`content`=?,`categorie_id`=? WHERE `id` = ? AND `admin_id` = ?";
        const values=[req.body.title,req.body.content,req.body.categorie_id]
        connection.query(q, [...values,postId,userInfo.id],(err,data)=>{
            if (err) return res.status(500).json(err);
            return res.json("post updated!")
        })
    })
}
module.exports={postPost, getPosts, deletePost,updatePost,getPost}
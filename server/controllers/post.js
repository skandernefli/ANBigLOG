const connection=require('../db/connection');
const jwt=require('jsonwebtoken');
const postModel = require('../postmodel/postModel');
const getPost=(req,res)=>{
    postModel.findById(req.params.id)
    .then(post => {
      if (!post) {
        return res.status(404).json({
          message: 'Post not found'
        });
      }

      res.status(200).json(post);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: error
      });
    });
}
const postPost=(req,res)=>{
    const userInfo=req.user;
        const post=new postModel({
            title: req.body.title,
            intro:req.body.intro,
            content:req.body.content,
            categorie_name:req.body.categorie_name,
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
const getPosts_Ad=(req,res)=>{
    const q = "SELECT * FROM posts";
    connection.query(q,(err,data)=>{
        if(err) return res.status(500).json(err);
        return res.status(200).json(data)
    })
}
const getPosts_Cl=(req,res)=>{
    postModel.find()
    .sort({ created_at: -1 })
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: error
      });
    });
}
const getPosts_Cteg = (req, res) => {
  const categorie_name = req.params.categorie_name;

  postModel
    .find({ categorie_name: categorie_name })
    .sort({ created_at: -1 })
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: error
      });
    });
};

const deletePost=(req,res)=>{
    const userInfo=req.user;
        const postId=req.params.id;
        const q="DELETE FROM posts WHERE `post_id`= ? AND `admin_id`= ?";
        connection.query(q,[postId,userInfo.id],(err,data)=>{
            if (err) return res.status(500).json(err);
            postModel.findByIdAndDelete(postId)
    .then(post => {
      if (!post) {
        return res.status(404).json({
          message: 'Post not found'
        });
      }

      res.status(200).json({
        message: 'Post deleted successfully',
        post: post
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: error
      });
    });
        })

}
const updatePost = (req, res) => {
    const userInfo = req.user;
    const postId = req.params.id;
    let categorie_id;
  
    if (req.body.categorie_name) {
      const q = "SELECT `id` FROM categories WHERE `name`=?";
      connection.query(q, [req.body.categorie_name], (err, data) => {
        if (err) return res.status(500).json(err);
        categorie_id = data[0].id;
  
        const updateQ =
          "UPDATE posts SET `title`=?,`categorie_id`=? WHERE `post_id` = ? AND `admin_id` = ?";
        const values = [req.body.title, categorie_id];
        connection.query(
          updateQ,
          [...values, postId, userInfo.id],
          (err, data) => {
            if (err) return res.status(500).json(err);
            postModel
              .findByIdAndUpdate(postId, req.body, { new: true })
              .then((post) => {
                if (!post) {
                  return res.status(404).json({
                    message: "Post not found",
                  });
                }
  
                res.status(200).json({
                  message: "Post updated successfully",
                  post: post,
                });
              })
              .catch((error) => {
                console.log(error);
                res.status(500).json({
                  error: error,
                });
              });
          }
        );
      });
    } else {
      const updateQ =
        "UPDATE posts SET `title`=?,`categorie_id`=NULL WHERE `post_id` = ? AND `admin_id` = ?";
      const values = [req.body.title];
      connection.query(
        updateQ,
        [...values, postId, userInfo.id],
        (err, data) => {
          if (err) return res.status(500).json(err);
          postModel
            .findByIdAndUpdate(postId, req.body, { new: true })
            .then((post) => {
              if (!post) {
                return res.status(404).json({
                  message: "Post not found",
                });
              }
  
              res.status(200).json({
                message: "Post updated successfully",
                post: post,
              });
            })
            .catch((error) => {
              console.log(error);
              res.status(500).json({
                error: error,
              });
            });
        }
      );
    }
  };
  
module.exports={postPost,getPosts_Cl,getPosts_Cteg, getPosts_Ad, deletePost,updatePost,getPost}
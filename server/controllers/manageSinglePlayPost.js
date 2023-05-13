const manageSinglePlayPost = require('../homepagemodel/manageSinglePlayPost');
const getGalleryPost=(req,res)=>{
    manageSinglePlayPost.findById(req.params.id)
    .then(manageSinglePlayPost => {
      if (!manageSinglePlayPost) {
        return res.status(404).json({
          message: 'gallery Post not found'
        });
      }

      res.status(200).json(manageSinglePlayPost);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: error
      });
    });
}
const postGalleryPost= async (req,res)=>{
    try {
        const newPost = {
          title: req.body.title,
          image: req.body.image,
          category: {
            name: req.body.category.name,
            create_At: req.body.category.create_At
          },
          description: req.body.description,
          link: req.body.link
        };
    
        const post = await manageSinglePlayPost.findOneAndUpdate(
          {},
          { $push: { data: newPost } },
          { upsert: true }
        );
    
        res.status(201).json({ message: "Post created successfully" });
      } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Something went wrong" });
      }
    };
  

const getGalleryPosts=(req,res)=>{
    manageSinglePlayPost.find()
    .sort({ created_at: -1 })
    .then(manageSinglePlayPost => {
      res.status(200).json(manageSinglePlayPost);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: error
      });
    });
}


const deleteGalleryPost=(req,res)=>{

  const postId = req.params.id;


  
  manageSinglePlayPost.findOneAndUpdate(
    { "data._id": postId }, // find document with matching data._id
    { $pull: { data: { _id: postId } } } // remove object with matching _id from data array
  )
    .then((result) => {
      if (result) {
        console.log(`Deleted post with Id ${postId}`);
        res.status(200).json({ message: "Post deleted successfully" });
      } else {
        console.log(`No post found with Id ${postId}`);
        res.status(404).json({ message: "Post not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Error deleting post" });
    });
}

const updateGalleryPost = (req, res) => {
    const postId = req.params.id;
  
   
            manageSinglePlayPost
              .findByIdAndUpdate(postId, req.body, { new: true })
              .then((manageSinglePlayPost) => {
                if (!manageSinglePlayPost) {
                  return res.status(404).json({
                    message: "Post not found",
                  });
                }
  
                res.status(200).json({
                  message: "Post updated successfully",
                  manageSinglePlayPost: manageSinglePlayPost,
                });
              })
              .catch((error) => {
                console.log(error);
                res.status(500).json({
                  error: error,
                });
              });
          }
        
  
module.exports={getGalleryPost,postGalleryPost, getGalleryPosts, deleteGalleryPost,updateGalleryPost}
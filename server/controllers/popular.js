const popularPosts = require('../homepagemodel/managepostsgallery/popular');
const getGalleryPost=(req,res)=>{
    popularPosts.findById(req.params.id)
    .then(popularPosts => {
      if (!popularPosts) {
        return res.status(404).json({
          message: 'gallery Post not found'
        });
      }

      res.status(200).json(popularPosts);
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
    
        const post = await popularPosts.findOneAndUpdate(
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
    popularPosts.find()
    .sort({ created_at: -1 })
    .then(popularPosts => {
      res.status(200).json(popularPosts);
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


  popularPosts.findOneAndUpdate(
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
  
   
            popularPosts
              .findByIdAndUpdate(postId, req.body, { new: true })
              .then((popularPosts) => {
                if (!popularPosts) {
                  return res.status(404).json({
                    message: "Post not found",
                  });
                }
  
                res.status(200).json({
                  message: "Post updated successfully",
                  popularPosts: popularPosts,
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
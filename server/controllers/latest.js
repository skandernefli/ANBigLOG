const LatestPosts = require('../homepagemodel/managepostsgallery/latest');
const getGalleryPost=(req,res)=>{
    LatestPosts.findById(req.params.id)
    .then(LatestPosts => {
      if (!LatestPosts) {
        return res.status(404).json({
          message: 'gallery Post not found'
        });
      }

      res.status(200).json(LatestPosts);
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
          image: req.body.picture,
          category: {
            name: req.body.category.name,
            create_At: req.body.category.create_At
          },
          description: req.body.description,
          link: req.body.link
        };
    
        const post = await LatestPosts.findOneAndUpdate(
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
    LatestPosts.find()
    .sort({ created_at: -1 })
    .then(LatestPosts => {
      res.status(200).json(LatestPosts);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: error
      });
    });
}
const deleteGalleryPost=(req,res)=>{

        const postId=req.params.id;
        LatestPosts.findByIdAndDelete(postId)
    .then(LatestPosts => {
      if (!LatestPosts) {
        return res.status(404).json({
          message: 'Post not found'
        });
      }

      res.status(200).json({
        message: 'Post deleted successfully',
        LatestPosts: LatestPosts
      });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        error: error
      });
    });

}
const updateGalleryPost = (req, res) => {
    const postId = req.params.id;
  
   
            LatestPosts
              .findByIdAndUpdate(postId, req.body, { new: true })
              .then((LatestPosts) => {
                if (!LatestPosts) {
                  return res.status(404).json({
                    message: "Post not found",
                  });
                }
  
                res.status(200).json({
                  message: "Post updated successfully",
                  LatestPosts: LatestPosts,
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
const trendyPosts = require('../homepagemodel/managepostsgallery/trendy');
const getGalleryPost=(req,res)=>{
    trendyPosts.findById(req.params.id)
    .then(trendyPosts => {
      if (!trendyPosts) {
        return res.status(404).json({
          message: 'gallery Post not found'
        });
      }

      res.status(200).json(trendyPosts);
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
    
        const post = await trendyPosts.findOneAndUpdate(
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
    trendyPosts.find()
    .sort({ created_at: -1 })
    .then(trendyPosts => {
      res.status(200).json(trendyPosts);
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
        trendyPosts.findByIdAndDelete(postId)
    .then(trendyPosts => {
      if (!trendyPosts) {
        return res.status(404).json({
          message: 'Post not found'
        });
      }

      res.status(200).json({
        message: 'Post deleted successfully',
        trendyPosts: trendyPosts
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
  
   
            trendyPosts
              .findByIdAndUpdate(postId, req.body, { new: true })
              .then((trendyPosts) => {
                if (!trendyPosts) {
                  return res.status(404).json({
                    message: "Post not found",
                  });
                }
  
                res.status(200).json({
                  message: "Post updated successfully",
                  trendyPosts: trendyPosts,
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
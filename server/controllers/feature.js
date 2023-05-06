const Feature = require('../homepagemodel/managefetureposts/feature');
const getGalleryPost=(req,res)=>{
    Feature.findById(req.params.id)
    .then(Feature => {
      if (!Feature) {
        return res.status(404).json({
          message: 'gallery Post not found'
        });
      }

      res.status(200).json(Feature);
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
          article: req.body.article,
          category: {
            name: req.body.category.name,
            create_At: req.body.category.create_At
          },
            link: req.body.link
        };
    
        const post = await Feature.findOneAndUpdate(
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
    Feature.find()
    .sort({ created_at: -1 })
    .then(Feature => {
      res.status(200).json(Feature);
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
        Feature.findByIdAndDelete(postId)
    .then(Feature => {
      if (!Feature) {
        return res.status(404).json({
          message: 'Post not found'
        });
      }

      res.status(200).json({
        message: 'Post deleted successfully',
        Feature: Feature
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
  
   
            Feature
              .findByIdAndUpdate(postId, req.body, { new: true })
              .then((Feature) => {
                if (!Feature) {
                  return res.status(404).json({
                    message: "Post not found",
                  });
                }
  
                res.status(200).json({
                  message: "Post updated successfully",
                  Feature: Feature,
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
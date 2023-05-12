const mongoose = require('../../db/MongodbConnection');
const postGallerySchema=new mongoose.Schema({
    data :[{
    title:{type: String, required: true},
    picture:{type: String, required: true},
    thumbnail:{type: String, required: true},
    video_link:{type: String, required: true},
    category:{
      
        name:{type: String, required: true},
        create_At:{type: String, required: true},


    },
    description:{type: String, required: true},
    link:{type: String, required: true},

}]
});

const postGallery=mongoose.model('postgallery',postGallerySchema);
module.exports=postGallery;
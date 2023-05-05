const mongoose = require('../../db/MongodbConnection');
const LatestPostsSchema=new mongoose.Schema({
    data :{
        title:{type: String, required: true},
        image:{type: String, required: true},
        category:{
          
            name:{type: String, required: true},
            create_At:{type: String, required: true},
    
    
        },
        description:{type: String, required: true},
        link:{type: String, required: true},

    
    }
});

const LatestPosts=mongoose.model('latestposts',LatestPostsSchema);
module.exports=LatestPosts;
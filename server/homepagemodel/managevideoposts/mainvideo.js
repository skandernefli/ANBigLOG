const mongoose = require('../../db/MongodbConnection');
const MainVideoSchema=new mongoose.Schema({
    data :[{
        title:{type: String, required: true},
        linkvideo:{type: String, required: true},
        description:{type: String, required: true},

        image:{type: String, required: true},
        category:{
          
            name:{type: String, required: true},
            create_At:{type: String, required: true},
    
    
        },
        linkpost:{type: String, required: true},

    
    }]
});

const mainVideo=mongoose.model('mainVideo',MainVideoSchema);
module.exports=mainVideo;
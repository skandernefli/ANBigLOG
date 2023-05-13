const mongoose = require('../db/MongodbConnection');
const manageSportsMainSectionSchema=new mongoose.Schema({
    data :[{
        title:{type: String, required: true},
        image:{type: String, required: true},
        category:{
          
            name:{type: String, required: true},
            create_At:{type: String, required: true},
    
    
        },
        description:{type: String, required: true},
        link:{type: String, required: true},

    
    }]
});

const manageSportsMainSection=mongoose.model('manageSportsMainSection',manageSportsMainSectionSchema);
module.exports=manageSportsMainSection;
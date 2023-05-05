const mongoose = require('../../db/MongodbConnection');
const FeatureSchema=new mongoose.Schema({
    data :{
        title:{type: String, required: true},
        image:{type: String, required: true},
        article:{type: String, required: true},
        category:{
          
            name:{type: String, required: true},
            create_At:{type: String, required: true},
    
    
        },
        article:{type: String, required: true},
        link:{type: String, required: true},

    
    }
});

const Feature=mongoose.model('featureposts',FeatureSchema);
module.exports=Feature;
const mongoose = require('../db/MongodbConnection');
const postSchema=new mongoose.Schema({
    title:{type: String, required: true},
    intro:{type: String, required: true},
    content:[{
        type: { type: String, enum: ['','text', 'image','backlink', 'title', 'subtitle', 'code', 'quote','points','video','file'] },
        value: { type: String },
  /*       backlink: {
            text: { type: String },
            link: { type: String }
        } */
    }],
    created_at:{type:Date,default:Date.now},
    updated_at:{type:Date, default:Date.now}
});

const postModel=mongoose.model('post',postSchema);
module.exports=postModel;
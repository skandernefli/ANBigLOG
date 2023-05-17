const mongoose = require('../db/MongodbConnection');
const postSchema=new mongoose.Schema({
    title:{type: String, required: true},
    intro:{type: String, required: true},
    categorie_name:{type: String, required: true},
    content:[{
        type: { type: String, enum: ['text','audio', 'image','headerimage','coverimage','thumb','backlink', 'title', 'subtitle', 'code', 'quote','points','video','headervideo','file' ,'externalImage','postquote',"tag","headervideoupload",
        'externalVideo',
        'externalAudio',
        'externalFile','externalLink'] },
        value: { type: String },
        desciption:{ type: String },
        title:{ type: String },
        source:{ type: String },
        

    }],
    created_at:{type:Date,default:Date.now},
    updated_at:{type:Date, default:Date.now}
});

const postModel=mongoose.model('post',postSchema);
module.exports=postModel;
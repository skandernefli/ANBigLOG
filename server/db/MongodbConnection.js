require('dotenv').config();
const mongoose=require('mongoose');
const uri=process.env.MONGODB_URI;
const dbname=process.env.MONGODB_DB_NAME;
mongoose.connect(uri, {
    useNewUrlParser: false,
    useUnifiedTopology: false,
    dbName: dbname
  }).then(() => {
    console.log('Connected successfully to MongoDB database');
  }).catch((error) => {
    console.error('Error connecting to MongoDB database', error);
  });
  module.exports=mongoose;
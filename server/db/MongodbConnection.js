require('dotenv').config();
const mongoose = require('mongoose');

const retryInterval = 5000; // Retry interval in milliseconds

async function connectToDatabase() {
  try {
    const uri = process.env.MONGODB_URI;
    const dbname = process.env.MONGODB_DB_NAME;

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: dbname
    });

    console.log('Connected successfully to MongoDB database');
  } catch (error) {
    console.error('Error connecting to MongoDB database', error);
    console.log('Retrying connection in ' + retryInterval / 1000 + ' seconds...');

    // Retry connection after the specified interval
    setTimeout(connectToDatabase, retryInterval);
  }
}

connectToDatabase();
module.exports = mongoose;

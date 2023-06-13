const mysql = require('mysql');
require('dotenv').config();

function connectToDatabase() {
  const connection = mysql.createConnection({
    port: process.env.PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  connection.connect((err) => {
    if (!err) {
      console.log("Connected to MySQL database");
    } else {
      console.error(err);
      console.log("Retrying connection...");

      // Retry connection after a delay
      setTimeout(connectToDatabase, 5000); // Retry after 5 seconds
    }
  });

  connection.on('error', (err) => {
    console.error("MySQL connection error:", err);
    console.log("Retrying connection...");

    // Retry connection after a delay
    setTimeout(connectToDatabase, 5000); // Retry after 5 seconds
  });

  module.exports = connection;
}

connectToDatabase();

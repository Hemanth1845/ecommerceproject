const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "ecom_user",
  password: "ecom123",
  database: "ecommerce",
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Database connected successfully");
  }
});

module.exports = db;

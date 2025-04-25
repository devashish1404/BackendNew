const mysql = require("mysql2/promise");

let db;

async function connectDB() {
  db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Mysql@123",
    database: "mysql_db",
  });
  console.log("MySQL Connected");
}

function getDB() {
  if (!db) {
    throw new Error("Database not connected. Call connectDB first.");
  }
  return db;
}

module.exports = { connectDB, getDB };

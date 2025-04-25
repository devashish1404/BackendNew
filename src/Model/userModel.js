const { getDB } = require("../db"); // ✅ Correct import

async function createUserTable() {
  try {
    const db = getDB(); // ✅ Get the connected DB instance

    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE
      );
    `);

    console.log("'users' table created or already exists.");
  } catch (error) {
    console.error("Error creating 'users' table:", error);
  }
}

module.exports = { createUserTable };

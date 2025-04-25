const { getDB } = require("../db");

const createUser = async (req, res) => {
  const { username, email } = req.body;

  try {
    const db = getDB();
    const [result] = await db.execute(
      "INSERT INTO users (username, email) VALUES (?, ?)",
      [username, email]
    );

    res.status(201).json({ message: "User created", id: result.insertId });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = createUser;

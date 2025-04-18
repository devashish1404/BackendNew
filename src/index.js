const express = require('express');
const mysql = require('mysql2/promise'); // Use mysql2 for promise-based connection
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// ✅ Wrap async DB code in a function
async function connectDB() {
    try {
        const db = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Mysql@123",
            // database: "testdb"
        });
        console.log("MySQL Database Connected Successfully!");
    } catch (err) {
        console.error("Database connection failed:", err);
    }
}

// 🔥 Call the async function
connectDB();

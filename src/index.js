// const express = require("express");
// const mysql = require("mysql2/promise");
// const routes = require("./Routes/route");

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.json()); // to handle JSON requests

// // Basic route
// // app.get("/", (req, res) => {
// //   res.send("Hello World!");
// // });


// let db;

// // Connect to MySQL and show databases
// async function connectDB() {
//   try {
//     const db = await mysql.createConnection({
//       host: "localhost",
//       user: "root",
//       password: "Mysql@123",
//       database: "mysql_db",
//     });

//     console.log("MySQL Connected");
  
//     {
//       //this code commented bcox db created by this syntax and then added in database:"mysql_db"
//       /*
//             const [databases] = await db.execute('CREATE DATABASE IF NOT EXISTS mysql_db'); 
//         console.log(databases);
//      console.log(await db.execute("SHOW DATABASES"));//This sends a SQL command to MySQL to get a list of all available databases.
//              */
//     }
//     module.exports = db; // export DB globally
//   } catch (err) {
//     console.error("Connection failed:", err);
//   }
// }

// app.use('/v1', routes);  //Use routes under /v1

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//     connectDB();
//   });
  
const express = require("express");
const routes = require("./Routes/route");
const { connectDB, getDB } = require("./db");
const { createUserTable } = require(".//Model/userModel");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

async function startServer() {
  try {
    await connectDB(); // ✅ connect first
    await createUserTable(); // ✅ create table next

    app.use("/v1", routes); // ✅ use routes AFTER table creation

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Server start failed:", err);
  }
}

startServer();




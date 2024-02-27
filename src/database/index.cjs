const mysql2 = require("mysql2/promise");

require("dotenv").config();
const HOST = process.env.DB_HOST;
const USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DB_DATABASE;

const connectionPool = mysql2.createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
});

const connectionDB = async () => {
  try {
    const connection = await connectionPool.getConnection();
    console.log("Connection to the database successfuly.");
    connection.release();
  } catch (err) {
    console.error("Unable to connect to the database.", err);
  }
};

module.exports = { connectionDB, connectionPool };

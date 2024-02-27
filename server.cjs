const express = require("express");
const app = express();

app.use(express.json());

const database = require("./src/database/index.cjs");
database.connectionDB();

const cors = require('cors')
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./src/routes/index.cjs");
app.use("/api", routes);

require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`API listening on port: ${PORT}`);
});

const express = require("express");
const route = express.Router();

const controllers = require("../controllers/index.cjs");

route.post("/createCustomer", controllers.createCustomerController);
route.patch("/updateCustomer/:id", controllers.updateCustomerController);
route.get("/readCustomer", controllers.readCustomerController);
route.delete("/deleteCustomer/:id", controllers.deleteCustomerController);

module.exports = route;
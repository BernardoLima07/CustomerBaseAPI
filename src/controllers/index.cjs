const customersModel = require("../model/index.cjs");

const customersControllers = {
  createCustomerController: async (req, res) => {
    const dataCustomer = req.body;
    console.log(dataCustomer);

    try {
      await customersModel.createCustomer(dataCustomer);
      res
        .status(201)
        .json({ message: "Customer created successfully.", dataCustomer });
    } catch (err) {
      console.log("Unable to created customer.", err);
    }
  },
  updateCustomerController: async (req, res) => {
    const dataCustomer = req.body;
    const customerId = req.params.id;

    try {
      const success = await customersModel.updateCustomer(
        dataCustomer,
        customerId
      );
      success
        ? res.status(200).json({ message: "Customer updated successfully." })
        : res.status(500).json({ message: "Unable to update customer." });
    } catch (err) {
      res.status(404).json({ message: "Customer not found.", err });
    }
  },
  readCustomerController: async (req, res) => {
    try {
      const customers = await customersModel.readCustomer();
      customers.length > 0
        ? res
            .status(200)
            .json({ message: "Customers obtained successfully.", customers })
        : res.status(404).json({ message: "No customers found." });
    } catch (err) {
      res.status(500).json({ message: "Unable to get customer.", err });
    }
  },
  deleteCustomerController: async (req, res) => {
    const customerId = req.params.id;

    try {
      await customersModel.deleteCustomer(customerId);
      customerId
        ? res.status(200).json({ message: "Customer deleted successfully" })
        : res.status(404).json({ message: "Customer not found." });
    } catch (err) {
      res.status(500).json({ message: "Unable to delete customer." });
    }
  },
};

module.exports = customersControllers;

const { connectionPool } = require("../database/index.cjs");
const client = connectionPool;

const customersModel = {
  createCustomer: async (dataCustomers) => {
    const { customerName, customerSurname, customerEmail } = dataCustomers;
    try {
      const query =
        "INSERT INTO data_customers (customerName, customerSurname, customerEmail) VALUES (?, ?, ?)";

      const [values] = await client.query(query, [
        customerName,
        customerSurname,
        customerEmail,
      ]);
      return values;
    } catch (err) {
      console.log("Unable to create query.", err);
    }
  },
  updateCustomer: async (dataCustomer, customerId) => {
    const { customerName, customerSurname, customerEmail } = dataCustomer;
    try { 
      const query =
        "UPDATE data_customers SET customerName = ?, customerSurname = ?, customerEmail = ? WHERE customerId = ?";

      const [result] = await client.query(query, [
        customerName,
        customerSurname,
        customerEmail,
        customerId,
      ]);
      
      return result.affectedRows > 0;
    } catch (err) {
      console.log("Unable to update query.", err);
    }
  },
  readCustomer: async () => {
    try {
      const query = "SELECT * FROM customers.data_customers";

      const [result] = await client.query(query);
      return result;
    } catch (err) {
      console.log("Unable to read query.", err);
    }
  },
  deleteCustomer: async (customerId) => {
    try {
      const query = "DELETE FROM data_customers WHERE customerId = ?";

      const [result] = await client.query(query, [customerId]);
      return result;
    } catch (err) {
      console.log("Unable to delete query.", err);
    }
  },
};

module.exports = customersModel;

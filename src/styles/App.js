import React, { useState } from 'react';
import CustomerList from '../components/CustomerList';
import CustomerForm from '../components/CustomerForm';
 import '../styles/App.css'; // Import global styles (optional)

const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customers, setCustomers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ]);

  const handleEdit = (customer) => {
    setSelectedCustomer(customer); // Set customer data in form
  };

  const handleSave = (updatedCustomer) => {
    if (updatedCustomer.id) {
      // Update an existing customer
      setCustomers((prev) =>
        prev.map((customer) =>
          customer.id === updatedCustomer.id ? updatedCustomer : customer
        )
      );
    } else {
      // Add a new customer
      const newCustomer = {
        ...updatedCustomer,
        id: customers.length + 1,
      };
      setCustomers((prev) => [...prev, newCustomer]);
    }
    setSelectedCustomer(null); // Reset selectedCustomer
  };

  const handleDelete = (id) => {
    setCustomers((prev) => prev.filter((customer) => customer.id !== id));
  };

  return (
    <div>
      <h1>Customer Management</h1>
      <CustomerForm selectedCustomer={selectedCustomer} onSave={handleSave} />
      <CustomerList customers={customers} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;

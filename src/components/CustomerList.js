import React, { useEffect, useState } from 'react';
import { fetchCustomers, deleteCustomer } from '../services/api';

const CustomerList = ({ onEdit }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers().then((res) => setCustomers(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteCustomer(id).then(() => {
      setCustomers(customers.filter((customer) => customer.id !== id));
    });
  };

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} ({customer.email}) 
            <button onClick={() => onEdit(customer)}>Edit</button>
            <button onClick={() => handleDelete(customer.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;

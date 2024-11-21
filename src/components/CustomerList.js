import React from 'react';
 import '../styles/CustomerList.css';

const CustomerList = ({ customers, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <span>{customer.name} ({customer.email})</span>
            <div>
              <button onClick={() => onEdit(customer)}>Edit</button>
              <button onClick={() => onDelete(customer.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;

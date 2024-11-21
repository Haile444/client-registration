import React, { useState, useEffect } from 'react';
import { createCustomer, updateCustomer } from '../services/api';

const CustomerForm = ({ selectedCustomer, onSave }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (selectedCustomer) setFormData(selectedCustomer);
  }, [selectedCustomer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const saveAction = selectedCustomer
      ? updateCustomer(selectedCustomer.id, formData)
      : createCustomer(formData);

    saveAction.then(() => onSave());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default CustomerForm;

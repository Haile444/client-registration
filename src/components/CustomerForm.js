import React, { useState, useEffect } from 'react';
 import '../styles/CustomerForm.css';

const CustomerForm = ({ selectedCustomer, onSave }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (selectedCustomer) {
      setFormData(selectedCustomer); // Populate form for editing
    } else {
      setFormData({ name: '', email: '' }); // Reset form for adding
    }
  }, [selectedCustomer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Pass updated data to App
    setFormData({ name: '', email: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <button type="submit">{selectedCustomer ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default CustomerForm;

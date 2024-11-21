import React, { useState } from 'react';
import CustomerList from './components/CustomerList';
import CustomerForm from './components/CustomerForm';

const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [reload, setReload] = useState(false);

  const handleEdit = (customer) => setSelectedCustomer(customer);
  const handleSave = () => {
    setSelectedCustomer(null);
    setReload(!reload);
  };

  return (
    <div>
      <h1>Customer Management</h1>
      <CustomerForm selectedCustomer={selectedCustomer} onSave={handleSave} />
      <CustomerList key={reload} onEdit={handleEdit} />
    </div>
  );
};

export default App;

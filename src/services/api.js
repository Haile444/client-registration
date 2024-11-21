import axios from 'axios';

const API_URL = 'http://localhost:5000/customers';

export const fetchCustomers = () => axios.get(API_URL);
export const createCustomer = (data) => axios.post(API_URL, data);
export const updateCustomer = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteCustomer = (id) => axios.delete(`${API_URL}/${id}`);

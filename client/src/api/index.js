import axios from 'axios';

const url = 'http://localhost:5000/tuotteet';
const adminurl = "http://localhost:5000/adminpanel"

export const fetchPosts = () => axios.get(url);
export const addProduct = (newProduct) => axios.post(adminurl, newProduct);
export const deleteProduct = (id) => axios.delete(`${adminurl}/${id}`);
export const updateProduct = (id, updatedProduct) => axios.patch(`${adminurl}/${id}`, updatedProduct);
import axios from 'axios';

const url = 'http://localhost:5000/tuotteet';

export const fetchPosts = () => axios.get(url);
export const addProduct = (newProduct) => axios.post(url, newProduct);
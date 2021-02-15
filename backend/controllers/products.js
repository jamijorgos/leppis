import mongoose from 'mongoose';
import ProductModel from '../models/productModel.js';

//Get all the products
export const getProducts = async (req, res) => {
    try {
        const allProducts =  await ProductModel.find();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
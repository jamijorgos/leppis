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

//Get Products by Category
export const getProductsByType = async (req, res) => {
    const { category: category } = req.params;
    console.log(category);
    try {
        const allProducts =  await ProductModel.find({category: category});
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
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

//Add new Product
export const addProduct = async (req, res) => {
    const product = req.body;
    const newProduct = new ProductModel(product);

    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
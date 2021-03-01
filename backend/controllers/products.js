import mongoose from 'mongoose';
import ProductModel from '../models/productModel.js';

// Haetaan kaikki tuotteet
export const getProducts = async (req, res) => {
    try {
        const allProducts =  await ProductModel.find();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// Haetaan tuotteet kategorian mukaan (Ei toistaiseksi käytössä, saattaa korvata getProducts() ajan säästämiseksi, mikäli mahdollista)
export const getProductsByType = async (req, res) => {
    const { category: category } = req.params;
    console.log(category);
    try {
        const filteredProducts =  await ProductModel.find({category: category});
        res.status(200).json(filteredProducts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
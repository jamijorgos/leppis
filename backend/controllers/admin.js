import mongoose from 'mongoose';
import ProductModel from '../models/productModel.js';

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

//Update by ID
export const updateProduct = async (req, res) => {
    const { id: _id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('Product Id not found');
    
    const updatedProduct = await ProductModel.findByIdAndUpdate(_id, product, { new: true });
    res.json(updatedProduct)
}

//Get Product by ID
export const getProductByID = async (req, res) => {
    const { id: _id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('Product ID not found')
    //Jos tuote poistettu palauttaa "null", eikä haluttua virheilmoitusta

    const productByID = await ProductModel.findById(_id);
    if(productByID === null)
        return res.status(404).send('Tuote on poistettu')

    res.json(productByID);
}

//Delete Product by ID
export const deleteProduct = async (req, res) => {
    const { id: _id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send('Product ID not found')

    await ProductModel.findByIdAndDelete(_id);
    res.send(`Product ID: ${_id} deleted`);
}

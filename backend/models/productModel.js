import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: String,
    selectedFile: String,
    category: String,
    subcategory: String
});

const ProductModel = mongoose.model('ProductModel', productSchema);

export default ProductModel;
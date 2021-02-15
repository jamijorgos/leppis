import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: String,
    selectedFile: String,
    type: String,
    subtype: String
});

const ProductModel = mongoose.model('ProductModel', productSchema);

export default ProductModel;
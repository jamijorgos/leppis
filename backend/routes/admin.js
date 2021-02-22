import express from 'express';
import * as adminController from '../controllers/admin.js'
import { getProducts } from '../controllers/products.js'

const router = express.Router();

router.get('/', getProducts);
router.post('/', adminController.addProduct);
router.patch('/:id', adminController.updateProduct);
router.get('/:id', adminController.getProductByID);
router.delete('/:id', adminController.deleteProduct);

export default router;
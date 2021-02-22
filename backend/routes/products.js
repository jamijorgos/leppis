import express from 'express';
import * as productController from '../controllers/products.js'

const router = express.Router();

router.get('/', productController.getProducts);
router.get('/:category', productController.getProductsByType);

export default router;
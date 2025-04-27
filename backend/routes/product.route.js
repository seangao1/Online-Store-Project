import express from 'express';


import { getProducts, createProduct, updateProduct, deleteProduct} from '../controllers/product.controller.js';

const router = express.Router();

// endpoint for getting all products;
router.get('/', getProducts);

// endpoint for adding(posting) a product
router.post("/", createProduct);

// endpoint for updating(putting) a product:
router.put('/:id', updateProduct);

// endpoint for deleting a product:
router.delete("/:id", deleteProduct);


export default router;
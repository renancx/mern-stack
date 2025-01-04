import express from "express";
import { getProducts, createProduct, updateProduct, deleteProduct, getProductById } from "../controllers/ProductController.js";
import { ensureAuthentication } from "../middleware/Auth.js";

const router = express.Router();

router.get('/', getProducts);
router.post('/', ensureAuthentication, createProduct);
router.put('/:id',  ensureAuthentication, updateProduct);
router.delete('/:id', ensureAuthentication, deleteProduct);
router.get('/:id', getProductById);

export default router;
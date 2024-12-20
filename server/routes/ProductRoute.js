import express from "express";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/ProductController.js";
import { ensureAuthentication } from "../middleware/Auth.js";

const router = express.Router();

router.get('/', getProducts);
router.post('/', ensureAuthentication, createProduct);
router.put('/:id',  ensureAuthentication, updateProduct);
router.delete('/:id', ensureAuthentication, deleteProduct);

export default router;
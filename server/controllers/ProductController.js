import mongoose from 'mongoose';
import Product from '../models/ProductModel.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).json({success: true, data: products});
    } catch (error) {
        return res.status(500).json({success: false, message: "Server error"});
    }
};

export const createProduct = async (req, res) => {
    const product = req.body; //user input

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false, message: 'All fields are required' });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        return res.status(201).json({success: true, data: newProduct});
    } catch (error) {
        return res.status(500).json({success: false, message: "Server error"});
    }
};

export const updateProduct =  async (req, res) => {
    const {id} = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({success: false, message: 'Invalid product id'});
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate
        (id, product, {new: true});
        res.status(200).json({success: true, data: updatedProduct});
    } catch (error) {
        res.status(500).json({success: false, message: 'Server error'});
    }
};

export const deleteProduct = async (req, res) => {
    const {id} = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: 'Product deleted successfully'});
    } catch (error) {
        res.status(404).json({success: false, message: 'Product not found'});
    }
};

export const getProductById = async (req, res) => {
    const {id} = req.params;

    try {
        const product = await Product.findById(id);
        res.status(200).json({success: true, data: product});
    } catch (error) {
        res.status(404).json({success: false, message: 'Product not found'});
    }
}

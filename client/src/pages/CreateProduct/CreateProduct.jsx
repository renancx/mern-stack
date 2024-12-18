import React, { useState } from 'react';
import { useProductStore } from  '../../store/product';
import "./styles.module.scss";

const CreateProduct = () => {
    const { createProduct } = useProductStore();
    const[newProduct, setNewProduct] = useState({name: '', price: '', image: ''});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await createProduct(newProduct);
        setNewProduct({name: '', price: '', image: ''});        
    }

    return(
        <div>
            <h1>asddsa</h1>
            <form>
                <div>
                    <label>Product Name</label>
                    <input type="text" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}/>
                </div>
                <div>
                    <label>Product Price</label>
                    <input type="text" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}/>
                </div>
                <div>
                    <label>Product Image</label>
                    <input type="text" value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}/>
                </div>
                <button onClick={handleSubmit}>Create Product</button>
            </form>
        </div>
    );
}

export default CreateProduct;
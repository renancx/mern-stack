import React, { useState } from 'react';
import { useProductStore } from  '../../store/product';
import styles from './styles.module.scss';

const CreateProduct = () => {
    const { createProduct } = useProductStore();
    const[newProduct, setNewProduct] = useState({name: '', price: '', image: ''});

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await createProduct(newProduct);
        setNewProduct({name: '', price: '', image: ''});        
    }

    return(
        <div className={styles["container"]}>
            <form className={styles["form"]}>
                <div className={styles["label-div"]}>
                    <label className={styles["label"]}>Product Name</label>
                    <input className={styles["label-input"]} type="text" value={newProduct.name} onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}/>
                </div>                
                <div className={styles["label-div"]}>
                    <label className={styles["label"]}>Product Price</label>
                    <input className={styles["label-input"]} type="text" value={newProduct.price} onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}/>
                </div>
                <div className={styles["label-div"]}>
                    <label className={styles["label"]}>Product Image</label>
                    <input className={styles["label-input"]} type="text" value={newProduct.image} onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}/>
                </div>
                <button className={styles["create-button"]} onClick={handleSubmit}>Confirm</button>
            </form>
        </div>
    );
}

export default CreateProduct;
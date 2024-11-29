import React, { useState } from 'react';

const CreatePage = () => {

    const[newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: ''
    });

    const handleAddProduct = () => {
        console.log("New product")
    }

    return(
        <div> 
            <h1>sdaadsdsa</h1>

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
                <button onClick={handleAddProduct}>Add Product</button>
            </form>
        </div>
    );
}

export default CreatePage;
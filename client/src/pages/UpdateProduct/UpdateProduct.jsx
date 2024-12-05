import React, { useState } from "react";
import { useProductStore } from "../../store/product";

const EditProduct = ({ product, onClose }) => {
    const { editProduct } = useProductStore();
    const [updatedProduct, setUpdatedProduct] = useState({ ...product });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await editProduct(updatedProduct);

        if (result.success) {
            onClose();
        } else {
            alert(result.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nome do Produto</label>
                <input
                    type="text"
                    value={updatedProduct.name}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                />
            </div>
            <div>
                <label>Preço do Produto</label>
                <input
                    type="text"
                    value={updatedProduct.price}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                />
            </div>
            <div>
                <label>Imagem do Produto</label>
                <input
                    type="text"
                    value={updatedProduct.image}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                />
            </div>
            <button type="submit">Salvar</button>
            <button type="button" onClick={onClose}>
                Cancelar
            </button>
        </form>
    );
};

export default EditProduct;

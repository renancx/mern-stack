import React, { useState } from "react";
import { useProductStore } from "../../store/product";
import styles from "./styles.module.scss";
import { handleError } from "../../utils/toast";

const EditProduct = ({ product, onClose }) => {
    const { editProduct } = useProductStore();
    const [updatedProduct, setUpdatedProduct] = useState({ ...product });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await editProduct(updatedProduct);

        if (result.success) {
            onClose();
        } else {
            handleError(result.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles["form"]}>
            <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>Nome do Produto</label>
                <input
                    type="text"
                    className={styles["form-input"]}
                    value={updatedProduct.name}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                />
            </div>
            <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>Preço do Produto</label>
                <input
                    type="text"
                    className={styles["form-input"]}
                    value={updatedProduct.price}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                />
            </div>
            <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>Imagem do Produto</label>
                <input
                    type="text"
                    className={styles["form-input"]}
                    value={updatedProduct.image}
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                />
            </div>
            <div className={styles["form-actions"]}>
                <button type="button" className={styles["form-button-cancel"]} onClick={onClose}>
                    Cancelar
                </button>
                <button type="submit" className={styles["form-button"]}>
                    Salvar
                </button>
            </div>
        </form>

    );
};

export default EditProduct;

import styles from "./styles.module.scss";
import ListProduct from "../../components/ListProduct/ListProduct";
import CreateProduct from "../../components/CreateProduct/CreateProduct";
import UpdateProduct from "../../components/UpdateProduct/UpdateProduct";
import Navbar from "../../components/Navbar/Navbar";
import { useProductStore } from "../../store/product";
import { Dialog } from 'primereact/dialog';
import { useState } from "react";

export default function Dashboard() {    
    const [visible, setVisible] = useState(false);

    const { products, setProducts, deleteProduct } = useProductStore();
    const [editingProduct, setEditingProduct] = useState(null);

    const handleEdit = (product) => {
        setEditingProduct(product);
    };

    const handleCloseEdit = () => {
        setEditingProduct(null);
    };

    const handleDelete = async (id) => {
        // TODO: criar um modal para confirmação
        const result = await deleteProduct(id);
        if (!result.success) {
            alert(result.message);
        }
    };

    return (
        <div className={styles["outer-container"]}>
            <div className={styles["container"]}>
                <Navbar />
                <button onClick={() => setVisible(true)}>Adicionar Produto</button>

                <Dialog
                    header="Create new product"
                    visible={visible}
                    position="top"
                    modal
                    onHide={() => {if (!visible) return; setVisible(false); }}
                    content={({ hide }) => (
                        <CreateProduct hide={hide} />
                    )}
                ></Dialog>

                <ListProduct renderProduct={(product) => (
                    <div className={styles["product-container"]}>
                        <img src={product.image} alt={product.name} className={styles["product-image"]} width={200} height={200} />
                        <h2 className={styles["product-name"]}>{product.name}</h2>
                        <p className={styles["product-price"]}>Price: {product.price}</p>
                        <button className={styles["product-edit"]} onClick={() => handleEdit(product)}>Editar</button>
                        <button className={styles["product-delete"]} onClick={() => handleDelete(product._id)}>Excluir</button>
                    </div>
                )}
                className="dashboard-list"/>
                {editingProduct && (
                    <div>
                        <h2>Editando Produto</h2>
                        <UpdateProduct product={editingProduct} onClose={handleCloseEdit} />
                    </div>
                )}
            </div>
        </div>
    )
}
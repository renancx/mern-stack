import styles from "./styles.module.scss";
import ListProduct from "../../components/ListProduct/ListProduct";
import CreateProduct from "../../components/CreateProduct/CreateProduct";
import UpdateProduct from "../../components/UpdateProduct/UpdateProduct";
import Navbar from "../../components/Navbar/Navbar";
import { useProductStore } from "../../store/product";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { useRef, useState } from "react";
import { handleSuccess, handleError } from "../../utils/toast";

export default function Dashboard() {    
    const [visible, setVisible] = useState(false);
    const [visibleEdit, setVisibleEdit] = useState(false);
    const { products, setProducts, deleteProduct } = useProductStore();
    const [editingProduct, setEditingProduct] = useState(null);
    const toast = useRef(null);

    const handleEdit = (product) => {
        setEditingProduct(product);
        setVisibleEdit(true);
    };

    const handleCloseEdit = () => {
        setEditingProduct(null);
        setVisibleEdit(false);
    };

    const handleDelete = (id) => {
        confirmDialog({
            message: "Are you sure you want to delete this product?",
            header: "Delete Confirmation",
            icon: "pi pi-exclamation-triangle",
            acceptClassName: "p-button-danger",
            accept: async () => {
                const result = await deleteProduct(id);
                if (result.success) {
                    handleSuccess(result.message);
                } else {
                    handleError(result.message);
                }
            }
        });
    };

    return (
        <div className={styles["outer-container"]}>
            <Toast ref={toast} />
            <ConfirmDialog />
            <div className={styles["container"]}>
                <Navbar />
                <button
                    className={styles["add-product-button"]} 
                    onClick={() => setVisible(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" width="20" height="20">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                    </svg>
                    Add new product
                </button>

                <Dialog
                    header="Create new product"
                    visible={visible}
                    position="center"
                    blockScroll={true}
                    dismissableMask={true}
                    modal={true}
                    onHide={() => setVisible(false)}
                >
                    <CreateProduct />
                </Dialog>

                <ListProduct renderProduct={(product) => (
                    <>
                        <img src={product.image} alt={product.name} className={styles["product-image"]} width={100} height={100} />
                        <h2 className={styles["product-name"]}>{product.name}</h2>
                        <p className={styles["product-price"]}>{product.price},00</p>

                        <section className={styles["product-buttons"]}>
                            <button onClick={() => handleEdit(product)} style={{ backgroundColor: "#0055ff" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" width="20" height="20">
                                    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                                    <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                                </svg>
                            </button>

                            <button onClick={() => handleDelete(product._id)} style={{ backgroundColor: "#ff7053"}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" width="20" height="20">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"/>
                                </svg>
                            </button>
                        </section>
                    </>
                )}
                className="dashboard-list"/>

                {editingProduct && (
                    <Dialog
                        header="Update Product"
                        visible={visibleEdit}
                        position="center"
                        blockScroll={true}
                        dismissableMask={true}
                        modal={true}
                        onHide={() => setVisibleEdit(false)}
                    >
                        <UpdateProduct product={editingProduct} onClose={handleCloseEdit} />
                    </Dialog>
                )}
            </div>
        </div>
    );
}

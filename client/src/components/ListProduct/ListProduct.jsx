import React, { useEffect, useState } from "react";
import { useProductStore } from "../../store/product";
import UpdateProduct from "../UpdateProduct/UpdateProduct";
import "./styles.module.scss";

const ProductList = () => {
    const { products, setProducts, deleteProduct } = useProductStore();
    const [editingProduct, setEditingProduct] = useState(null);

    const handleEdit = (product) => {
        setEditingProduct(product);
    };

    const handleCloseEdit = () => {
        setEditingProduct(null);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("http://localhost:4000/api/products");
                const response = await res.json();

                if (response.success) {
                    setProducts(response.data);
                } else {
                    console.error("Erro ao carregar produtos:", response.message);
                }
            } catch (error) {
                console.error("Erro na requisição:", error);
            }
        };
        fetchProducts();
    }, [setProducts]);

    const handleDelete = async (id) => {
        // TODO: criar um modal para confirmação
        const result = await deleteProduct(id);
        if (!result.success) {
            alert(result.message);
        }
    };

    return (
        <div>
            {products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>
                            <div className="product-container">
                                <h2>{product.name}</h2>
                                <p>Preço: R$ {product.price}</p>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    style={{ width: "100px" }}
                                />
                                <button onClick={() => handleEdit(product)}>Edit</button>
                                <button onClick={() => handleDelete(product._id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhum produto encontrado.</p>
            )}
            {editingProduct && (
                <div>
                    <h2>Editando Produto</h2>
                    <UpdateProduct product={editingProduct} onClose={handleCloseEdit} />
                </div>
            )}
        </div>
    );
};

export default ProductList;

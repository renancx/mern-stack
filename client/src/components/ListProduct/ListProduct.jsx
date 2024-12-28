import React, { useEffect } from "react";
import { useProductStore } from "../../store/product";
import "./styles.module.scss";

const ListProduct = ({ renderProduct }) => {
    const { products, setProducts } = useProductStore();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("http://localhost:4000/api/products");
                const response = await res.json();

                if (response.success) {
                    setProducts(response.data);
                } else {
                    console.error("Erro ao carregar produtos: ", response.message || "Resposta inválida do servidor.");
                }
            } catch (error) {
                console.error("Erro na requisição: ", error.message || error);
            }
        };

        fetchProducts();
    }, [setProducts]);

    return (
        <div>
            {products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>{renderProduct(product)}</li>
                    ))}
                </ul>
            ) : (
                <p>Nenhum produto encontrado.</p>
            )}
        </div>
    );
};

export default ListProduct;

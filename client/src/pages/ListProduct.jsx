import React, { useEffect } from "react";
import { useProductStore } from "../store/product";

const ProductList = () => {
    const { products, setProducts } = useProductStore();

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

    return (
        <div>
            <h1>Lista de Produtos</h1>
            {products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>
                            <h2>{product.name}</h2>
                            <p>Preço: R$ {product.price}</p>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: "100px" }}
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Nenhum produto encontrado.</p>
            )}
        </div>
    );
};

export default ProductList;

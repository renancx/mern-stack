import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProductStore } from "../../store/product";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Product() {
    const { id } = useParams();
    const { products } = useProductStore();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        const product = products.find((product) => product._id === id);
        setProduct(product);
    }, [id, products]);

    return (
        <div className={styles["product-container"]}>
            <Navbar />

            {product ? (
                <div className={styles["container"]}>
                    {/* <p>{product.description}</p> */}
                    <div className={styles["product-info"]}>
                        <img className={styles["product-img"]} src={product.image} alt={product.name} />
                        <div className={styles["product-details"]}>
                            <h1 className={styles["product-title"]}>{product.name}</h1>
                            <p className={styles["product-price"]}>R$ {product.price},00</p>
                            <button className={styles["add-to-cart"]}>Add do cart</button>
                        </div>
                    </div>
                    <div className={styles["product-description"]}>
                        <h2>About this product</h2>
                        <p>
                            Product description 

                        </p>
                    </div>
                </div>
            ) : (
                <p>Product not found.</p>
            )}

            <Footer />
        </div>        

    );
}
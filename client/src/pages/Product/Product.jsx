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
                <>
                    <h1 className={styles["product-title"]}>{product.name}</h1>
                    {/* <p>{product.description}</p> */}
                    <p className={styles["product-price"]}>Price: {product.price}</p>
                    <img className={styles["product-img"]} src={product.image} alt={product.name} />
                </>
            ) : (
                <p>Product not found.</p>
            )}

            <Footer />
        </div>        

    );
}
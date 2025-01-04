import styles from "./styles.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import ListProduct from "../../components/ListProduct/ListProduct";
import banner from "../../images/banner.jpg";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <div className={styles["outer-container"]}>
            <div className={styles["container"]}>
                <Navbar />
                <img src={banner} className={styles["banner"]}></img>
                <h1 className={styles["h1"]}>Our Featured Products</h1>
                <hr className={styles["line"]}></hr>
                <ListProduct renderProduct={(product) => (
                    <Link to={`/product/${product._id}`} className={styles["product-link"]}>
                        <img src={product.image} alt={product.name} className={styles["product-image"]} width={200} height={200} />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                    </Link>
                )} 
                className="home-list"/>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
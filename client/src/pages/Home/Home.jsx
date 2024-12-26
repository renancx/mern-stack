import styles from "./styles.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import ListProduct from "../../components/ListProduct/ListProduct";
import banner from "../../images/banner.jpg";

const HomePage = () => {
    return(
        <div className={styles["outer-container"]}>
            <div className={styles["container"]}>
                <Navbar />
                <img src={banner} className={styles["banner"]}></img>
                <h1>Our Featured Products</h1>
                <hr className={styles["line"]}></hr>
                <ListProduct />
            </div>
        </div>
    );
}

export default HomePage;
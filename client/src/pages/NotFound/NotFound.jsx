import styles from "./styles.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import error404 from "../../images/404.svg";

export default function NotFound() {

    return (
        <div className={styles["container"]}>
            <Navbar />
                <img src={error404} alt="404" className={styles["img"]} width={550} height={550} />

                <button className={styles["btn"]} onClick={() => window.location.href = "/"}>Go back to Home</button>
            <Footer />
        </div>
    )
}
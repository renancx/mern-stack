import styles from "./styles.module.scss";    
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function NotFound() {

    return (
        <div className={styles["container"]}>
            <Navbar />
            
            <Footer />
        </div>
    )
}
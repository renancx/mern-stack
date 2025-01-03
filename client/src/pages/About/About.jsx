import styles from "./styles.module.scss";    
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function About() {

    return (
        <div className={styles["container"]}>
            <Navbar />
            <h1>About page</h1>
            <Footer />
        </div>
    )
}
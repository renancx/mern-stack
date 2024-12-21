import styles from "./styles.module.scss";
import { useAuth } from "../../providers/AuthContext";
import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
    }

    return(
        <div>
            <Navbar />
            <div className={styles["container"]}>
                <h1 className={styles["h1"]}>Home page</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default HomePage;
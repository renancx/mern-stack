import styles from "./styles.module.scss";
import { useAuth } from "../../providers/AuthContext";

const HomePage = () => {
    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
    }

    return(
        <div>
            <h1 className={styles["h1"]}>Home page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default HomePage;
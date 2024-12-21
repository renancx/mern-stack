import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { useAuth } from '../../providers/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();

    const [visible, setVisible] = useState(false);

    return(
        <div className={styles["navbar"]}>
            <h1>Company</h1>
            <div className={styles["home"]}>
                <Link to="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                        <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clip-rule="evenodd" />
                    </svg>
                    Home
                </Link>
            </div>
            <Link to="/about">About</Link>
            <Link to="/dashboard">Dashboard</Link>
            <InputText placeholder="Search" type="text" />

            {isAuthenticated ? (
                <div className={styles["user-menu"]}>
                    Logout
                </div>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </div>
    );
}

export default Navbar;
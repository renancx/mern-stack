import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";
import { InputText } from 'primereact/inputtext';
import { useAuth } from '../../providers/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const menu = useRef(null);

    const [menuActive, setMenuActive] = useState(false);

    return(
        <div className={styles["navbar"]}>
            <h1>Company</h1>
            
            <div className={styles["menu"]}>
                <div className={styles["menu-home"]}>
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                            <path fillRule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clipRule="evenodd" />
                        </svg>
                        Home
                    </Link>
                </div>

                <div className={styles["menu-about"]}>
                    <Link to="/about">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                        </svg>
                        About
                    </Link>
                </div>
                
                <div className={styles["menu-dashboard"]}>
                    <Link to="/dashboard">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z" clipRule="evenodd" />
                        </svg>
                        Dashboard
                    </Link>
                </div>
            </div>
            
            <div className={styles["search-bar"]}>
                <span className={styles["search-icon"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                </span>
                <InputText placeholder="Search" type="text" className={styles["search-input"]} />
            </div>

            {isAuthenticated && (
                <button 
                    onClick={() => setMenuActive(!menuActive)} 
                    className={styles["user-icon"]}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                    </svg>
                </button>
            )}
 
            {isAuthenticated ? (
                menuActive && (
                    <div className={styles["user-menu"]}>
                        <ul>
                            <li> <Link to="/profile" className={styles["user-menu-link"]}>Profile</Link> </li>
                            <li> <Link to="/settings" className={styles["user-menu-link"]}>Settings</Link> </li>
                            <li> <Link to="/"  className={styles["user-menu-link"]} onClick={logout}>Logout</Link> </li>
                        </ul>
                    </div>
                )
            ) : (
                <Link to="/login">Login</Link>
            )}
        </div>
    );
}

export default Navbar;
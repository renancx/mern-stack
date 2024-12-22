import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.scss";
import { InputText } from 'primereact/inputtext';
import { Menu } from 'primereact/menu';
import { useAuth } from '../../providers/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();
    const menu = useRef(null);

    const items = [
        {
            label: 'Sign in as' + localStorage.getItem('loggedInUser'),
            icon: 'pi pi-user'
        },
        { separator: true },
        {
            label: 'Profile',
            icon: 'pi pi-user',
            command: () => {
                window.location.href = '/profile';
            },
        },
        { separator: true },
        {
            label: 'Logout',
            icon: 'pi pi-power-off',
            command: () => {
                logout();
            }
        }
    ];

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
                    <button onClick={(e) => menu.current.toggle(e)} className={styles["user-button"]}>
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1C8.96243 1 6.5 3.46243 6.5 6.5C6.5 9.53757 8.96243 12 12 12C15.0376 12 17.5 9.53757 17.5 6.5C17.5 3.46243 15.0376 1 12 1Z" fill="#fff"/>
                        <path d="M7 14C4.23858 14 2 16.2386 2 19V22C2 22.5523 2.44772 23 3 23H21C21.5523 23 22 22.5523 22 22V19C22 16.2386 19.7614 14 17 14H7Z" fill="#fff"/>
                    </svg>
                    </button>
                    <Menu popup ref={menu} model={items} />
                </div>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </div>
    );
}

export default Navbar;
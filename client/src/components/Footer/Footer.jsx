import React from 'react';
import styles from "./styles.module.scss";

const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer-content"]}>
                <div className={styles["footer-content-left"]}>
                    <h1 className={styles["footer-content-left-title"]}>Company</h1>
                    <p className={styles["footer-content-left-description"]}>Company is a platform that connects buyers and sellers in a single platform</p>
                </div>
                <div className={styles["footer-content-right"]}>
                    <h2 className={styles["footer-content-right-title"]}>Contact</h2>
                    <p className={styles["footer-content-right-description"]}>Email: company@email.com</p>
                    <p className={styles["footer-content-right-description"]}>Phone: +1 123 456 7890</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
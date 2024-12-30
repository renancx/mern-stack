import styles from "./styles.module.scss";
import { useState } from "react";
import ProductList from "../../components/ListProduct/ListProduct";
import CreateProduct from "../../components/CreateProduct/CreateProduct";
import { Dialog } from 'primereact/dialog';        
import Navbar from "../../components/Navbar/Navbar";

export default function About() {

    return (
        <div className={styles["container"]}>
            <Navbar />
            <h1>About page</h1>

        </div>
    )
}
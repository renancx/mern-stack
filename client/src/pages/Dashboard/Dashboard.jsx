import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../providers/AuthContext";
import ProductList from "../../components/ListProduct/ListProduct";

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard muito pica</h1>
            <ProductList />
        </div>
    )
}
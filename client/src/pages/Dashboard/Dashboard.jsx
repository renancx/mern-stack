import styles from "./styles.module.scss";
import { useState } from "react";
import ProductList from "../../components/ListProduct/ListProduct";
import CreateProduct from "../../components/CreateProduct/CreateProduct";
import { Dialog } from 'primereact/dialog';        
import Navbar from "../../components/Navbar/Navbar";

export default function Dashboard() {

    const [visible, setVisible] = useState(false);
    return (
        <div>
            <Navbar />
            <h1>Dashboard muito pica</h1>
            <button onClick={() => setVisible(true)}>Adicionar Produto</button>

            <Dialog
                header="Create new product"
                visible={visible}
                position="top"
                modal
                onHide={() => {if (!visible) return; setVisible(false); }}
                content={({ hide }) => (
                    <CreateProduct hide={hide} />
                )}
            ></Dialog>
            <ProductList />
        </div>
    )
}
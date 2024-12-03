import React, { createContext, useReducer, useContext } from "react";

const initialState = {
    products: []
};

const productReducer = (state, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        case "ADD_PRODUCT":
            return { ...state, products: [...state.products, action.payload] };
        default:
            return state;
    }
};

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState);

    const setProducts = (products) => {
        dispatch({ type: "SET_PRODUCTS", payload: products });
    };

    const createProduct = async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please fill in all fields." };
        }

        const res = await fetch("http://localhost:4000/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        });

        const data = await res.json();

        dispatch({ type: "ADD_PRODUCT", payload: data });

        return { success: true, message: "Product added successfully." };
    };

    return (
        <ProductContext.Provider value={{ ...state, setProducts, createProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductStore = () => {
    return useContext(ProductContext);
};
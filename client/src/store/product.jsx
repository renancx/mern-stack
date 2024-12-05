import React, { createContext, useReducer, useContext } from "react";

const initialState = {
    products: []
};

const productReducer = (state, action) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return {...state, products: action.payload };
        case "ADD_PRODUCT":
            return {...state, products: [...state.products, action.payload] };
        case "DELETE_PRODUCT":
            return {...state, products: state.products.filter((product) => product.id !== action.payload)};
        case "UPDATE_PRODUCT":
            return {
                ...state, products: state.products.map((product) => product.id === action.payload.id
                ? { ...product, ...action.payload } : product)};
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

    const deleteProduct = async (id) => {
        try {
            const res = await fetch(`http://localhost:4000/api/products/${id}`, {method: "DELETE"});

            if(res.ok) {
                dispatch({type: "DELETE_PRODUCT", payload: id});
                return { success: true, message: "Product deleted successfully." };
            }
            else {
                const error = await res.json();
                return {success: false, message: error.message };
            }
        }
        catch (error) {
            return {success: false, message: error.message };
        }
    }

    const editProduct = async (updatedProduct) => {
        try {
            console.log(updatedProduct)

            const res = await fetch(`http://localhost:4000/api/products/${updatedProduct._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedProduct),
            });
    
            if (res.ok) {
                const data = await res.json();
                dispatch({ type: "UPDATE_PRODUCT", payload: data });
                return { success: true, message: "Product updated successfully." };
            } else {
                const errorData = await res.json();
                return { success: false, message: errorData.message || "Failed to update product." };
            }
        } catch (error) {
            return { success: false, message: error.message };
        }
    };
    

    return (
        <ProductContext.Provider value={{ ...state, setProducts, createProduct, deleteProduct, editProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductStore = () => {
    return useContext(ProductContext);
};
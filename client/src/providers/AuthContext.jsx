import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleError, handleSuccess } from "../utils/toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(() => localStorage.getItem("token") || null);
    const [user, setUser] = useState(() => localStorage.getItem("loggedInUser") || null);
    const navigate = useNavigate();

    const login = async (loginInfo) => {
        try {
            const {email, password} = loginInfo;
            if (!email || !password) {
                return handleError("All fields are required");
            }
            const url = "http://localhost:4000/auth/login";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const {success, message, jwtToken, name, error} = result;

            if (success) {
                handleSuccess(message);
                localStorage.setItem("token", jwtToken);
                localStorage.setItem("loggedInUser", name);
                setToken(jwtToken);
                setUser(name);
                navigate("/");
            } else {
                handleError(message || error)
            }
        } catch (err) {
            handleError(err);
        }
    };

    const signup = async (signupInfo) => {
        try {
            const { name, email, password } = signupInfo;
            if (!name || !email || !password) {
                return handleError("All fields are required");
            }
            const url = "http://localhost:4000/auth/signup";
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });
            const result = await response.json();
            const { success, message, error } = result;

            if (success) {
                handleSuccess(message);
                navigate("/login");
            } else {
                handleError(message || error);
            }
        } catch (err) {
            handleError("An error occurred during signup");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("loggedInUser");
        setToken(null);
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ token, user, login, signup, logout, isAuthenticated: !!token }}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);
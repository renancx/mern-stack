import "./styles.css";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        
    };

    return (
        <div className="container">
            <h1>Signup</h1>
            <form>
                <div>
                    <label htmlFor="name" onChange={handleChange}>Name</label>
                    <input type="text"/>
                </div>
                <div>
                    <label htmlFor="email" onChange={handleChange}>Email</label>
                    <input type="email"/>
                </div>
                <div>
                    <label htmlFor="password" onChange={handleChange}>Password</label>
                    <input type="password"/>
                </div>
                <button>Signup</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}
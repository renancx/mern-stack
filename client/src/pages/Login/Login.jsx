import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../providers/AuthContext";

export default function Login() {
    const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
    const { login } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(loginInfo);
    };

    return (
        <div className={styles["outer-container"]}>            
            <div className={styles["container"]}>                
                <h1 className={styles["h1"]}>Login</h1>
                <form onSubmit={handleSubmit} className={styles["form"]}>
                    <div className={styles["label"]}>
                        <label htmlFor="email">Email</label>
                        <input className={styles["input"]} name="email" type="email" onChange={handleChange} value={loginInfo.email}/>
                    </div>
                    <div className={styles["label"]}>
                        <label htmlFor="password">Password</label>
                        <input className={styles["input"]} name="password" type="password" onChange={handleChange} value={loginInfo.password} placeholder="At least 5 characters"/>
                    </div>
                    <button className={styles["submit-button"]} type="submit">Continue</button>
                    <p className={styles["p"]}>New customer? <Link to="/signup">Create your account</Link></p>
                </form>
            </div>
        </div>
    );
}
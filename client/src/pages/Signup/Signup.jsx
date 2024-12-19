import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../providers/AuthContext";

export default function Signup() {
    const [signupInfo, setSignupInfo] = useState({name: "", email: "", password: ""});
    const { signup } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        await signup(signupInfo);
    };    

    return (
        <div className={styles["container"]}>
            <h1 className={styles["h1"]}>Create account</h1>
            <form onSubmit={handleSignup} className={styles["form"]}>
                <div className={styles["label"]}>
                    <label htmlFor="name">Your name</label>
                    <input className={styles["input"]} name="name" type="text" onChange={handleChange} value={signupInfo.name} placeholder="First and last name..."/>
                </div>
                <div className={styles["label"]}>
                    <label htmlFor="email">Email</label>
                    <input className={styles["input"]} name="email" type="email" onChange={handleChange} value={signupInfo.email}/>
                </div>
                <div className={styles["label"]}>
                    <label htmlFor="password">Password</label>
                    <input className={styles["input"]} name="password" type="password" onChange={handleChange} value={signupInfo.password} placeholder="At least 5 characters"/>
                </div>
                <button className={styles["submit-button"]} type="submit">Register Now</button>
                <p className={styles["p"]} >Already have an account? <Link to="/login">Sign in</Link></p>
            </form>
        </div>
    );
}
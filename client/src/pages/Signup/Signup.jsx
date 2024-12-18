import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleError, handleSuccess } from "../../utils/toast";


export default function Signup() {

    const [signupInfo, setSignupInfo] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copySignupInfo = {...signupInfo};
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const {name, email, password} = signupInfo;
        if(!name || !email || !password){
            return handleError("All fields are required");
        }
        else{
            try {
                const url = "http://localhost:4000/auth/signup";
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(signupInfo)
                });
                const result = await response.json();
                const {success, message, error} = result;
                if(success){
                    handleSuccess(message);
                    setTimeout(() => {
                        navigate("/login")
                    }, 1000)
                } else if(error) {
                    return handleError(message);
                }
            }
            catch (error) {
                return handleError(error);
            }            
        }
    }

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
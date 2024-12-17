import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleError, handleSuccess } from "../../utils/toast";


export default function Login() {

    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyLoginInfo = {...loginInfo};
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const {email, password} = loginInfo;
        if(!email || !password){
            return handleError("All fields are required");
        }
        else{
            try {
                const url = "http://localhost:4000/auth/login";
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(loginInfo)
                });
                const result = await response.json();
                const {success, message} = result;
                if(success){
                    handleSuccess(message);
                    setTimeout(() => {
                        navigate("/")
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
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="label email-label">
                    <label htmlFor="email">Email</label>
                    <input name="email" type="email" onChange={handleChange} value={loginInfo.email}/>
                </div>
                <div className="label password-label">
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" onChange={handleChange} value={loginInfo.password} placeholder="At least 5 characters"/>
                </div>
                <button className="submit-button" type="submit">Continue</button>
                <p>New customer? <Link to="/signup">Create your account</Link></p>
            </form>
        </div>
    );
}
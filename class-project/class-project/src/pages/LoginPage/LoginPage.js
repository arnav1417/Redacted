import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./LoginPage.css"

export default function Login (props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {d
        // e.preventDefault();
    }

    return (
        <div className="auth-form-container">
            {/* <h2>Login</h2> */}
            <form className="login-form" method="post" action="http://localhost:5000/login">
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button id="loginButton" type="submit" onClick={handleSubmit}>Log In</button>
            </form>
            <NavLink className="link-btn" to={"/signup"}>Don't have an account? Register here.</NavLink>
        </div>
    )
}
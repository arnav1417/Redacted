import React, { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Register(props){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [pass2, setPass2] = useState('');
    const [name, setName] = useState('');
    const [stykle,setstyle]= useState('');

    const handleSubmit = (e) => {
        // e.preventDefault();
        // console.log(email);
        if(!checkPassword()){
        e.preventDefault();
        }
    }
    function checkPassword() {
        if (pass !== pass2) {
            setstyle("red");
            return false;
        }
        else{return true;}
    }

    return (
        <div className="auth-form-container">
        <form className="register-form" method="post" action="http://localhost:5000/users">
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input className={stykle} value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="chpassword">Re-enter Password</label>
            <input  className={stykle} value={pass2} onChange={(e) => setPass2(e.target.value)} type="password" placeholder="********" id="chpassword" name="chpassword" />
            <button id="loginButton" type="submit" onClick={handleSubmit}>Log In</button>
        </form>
        <NavLink className="link-btn" to={"/login"}>Already have an account? Login here.</NavLink>
    </div>
    )
}
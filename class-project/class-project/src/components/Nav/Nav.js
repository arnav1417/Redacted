import React from "react"
import { NavLink } from "react-router-dom"
import "./Nav.css"

export default function Nav() {
    return (
        <nav className="navContainer">
            <div className="logo" id="logo">
                <NavLink to="/">REDACTED</NavLink>
            </div>
            <ul className="navItemsList">
                <li className="navItem">
                    <NavLink to="/write">Write</NavLink>
                </li>
                <li className="navItem">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li className="navItem">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="navItem">
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}
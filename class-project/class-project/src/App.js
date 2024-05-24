import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"

import HomePage from "./pages/HomePage/HomePage"
import AboutPage from "./pages/AboutPage/AboutPage"
import ContactPage from "./pages/ContactPage/ContactPage"
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage"
import WritePage from "./pages/WritePage/WritePage"
import LoginPage from"./pages/LoginPage/LoginPage"
import RegisterPage from "./pages/LoginPage/RegisterPage"


export default function App() {
    return (
    <div className="content">
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
            <Route path="/contact" element={<ContactPage/>}></Route>
            <Route path="/write" element={<WritePage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/signup" element={<RegisterPage/>}></Route>
            <Route path="/sample-project-title" element={<PostDetailsPage/>}></Route>
        </Routes>
    </div>
    )
}
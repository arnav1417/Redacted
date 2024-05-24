import React from "react"
import "./ContactPage.css"

export default function ContactPage() {
    return (
        <div id="contactFormContainer">
            <form action="" id="contactFrom">
                <label>Full Name</label>
                <input type="text" name="fullName" className="contactInput" id="nameField" placeholder="John Doe" />

                <label>Email</label>
                <input type="email" name="email" className="contactInput" id="emailField" placeholder="johndoe@gmail.com" />

                <label>Query</label>
                <textarea name="query" cols="40" rows="4" className="contactInput" id="queryField"></textarea>

                <button type="submit" value="submit" id="contactFormSubmit">Submit</button>
            </form>
        </div>
    )
}
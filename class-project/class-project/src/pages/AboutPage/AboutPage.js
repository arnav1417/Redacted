import React from "react"
import "./AboutPage.css"

export default function AboutPage() {
    return (
        <div className="aboutContainer">
            <h1>Our Amazing Team</h1>
            <p id="descr">Take a look at the people behind this project! We are a group of reluctant engineers fighting hard for marks. This is just a project for academic evaluation, so we didn't bother putting in any real images, except for Arnav Agarwal's, that's his 19th birthday selfie.</p>
            <div className="aboutPageContainer">
                <div className="profileCard">
                        <img src={require("../../static/pathak.jpeg")} alt="" />
                    <h3>Arjun Pathak</h3>
                    <p>Did most of the frontend for this project, because there was literally no other option.</p>
                </div>

                <div className="profileCard">
                    <img src={require("../../static/aggarwal.jpg")} alt="" />
                    <h3>Arnav Agarwal</h3>
                    <p>Because diversity is important. Teamed up with Armaan Arora to finish the presentation and project report in time.</p>
                </div>

                <div className="profileCard">
                    <img src={require("../../static/ahuja.jpeg")} alt="" />
                    <h3>Arnav Ahuja</h3>
                    <p>Helped me with the designs, some React Routing but most importantly: He picked the profile pictures.</p>
                </div>

                <div className="profileCard">
                    <img src={require("../../static/arora.jpg")} alt="" />
                    <h3>Armaan Arora</h3>
                    <p>Helped finish the presentationa and project report (he's the CR by the way)</p>
                </div>
            </div>
        </div>
    )
}
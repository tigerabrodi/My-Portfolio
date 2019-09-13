import React from 'react';
import "./About.css"

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="content">
                    <h1
                        className="title is-2 has-text-centered is-spaced has-text-weight-bold is-family-primary is-uppercase has-text-primary">Tiger Abrodi</h1>
                    <h2
                        className="subtitle is-4 has-text-weight-medium is-family-secondary has-text-centered has-text-primary">
                        Born 2001.03.15 in Sweden, Stockholm, moved to Germany at the age of 14. I love
                        learning new things and dealing with various Technlogies, Javascript, Python and
                        Java and the frameworks of these are Web & App Technologies I wanna master,
                        aswell as 2D & 3D Game Development with Unity and 3D Modelling & Animation with
                        Blender, Adobe Softwares are also a part of my learning. As a Youtuber I share
                        my Experience, release Educational Content and document my Journey.
                    </h2>
                </div>
                <div className="picture">
                    <img
                        className="about-picture"
                        src="https://immitate.com/wp-content/uploads/2018/10/featured-3-480x480.png"
                        alt="Tiger Abrodi About"/>
                </div>
            </div>
        </section>

    )
}

export default About;
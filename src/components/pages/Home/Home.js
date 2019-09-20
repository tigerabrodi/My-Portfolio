import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css";


const Home = () => {
    return (
        <div className="home has-text-centered">
            <h1 className="title is-spaced is-size-1 has-text-primary is-family-monospace has-text-weight-bold">TIGER ABRODI</h1>
            <h2 className="subtitle is-size-3 has-text-primary is-family-code has-text-weight-bold">I'm a Fullstack Web & App Developer, 3D Modeller and Youtuber based in Germany</h2>
            <Link exact to="/projects" id="home-button" className="button is-rounded is-outlined is-primary is-medium">Projects</Link>
        </div>
    );
}

export default Home;

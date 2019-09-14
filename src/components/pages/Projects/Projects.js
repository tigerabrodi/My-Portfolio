import React, {useState} from 'react';
import {Link} from "react-router-dom";
import "./Projects.css";


const projects = [
    {
        title: "My Portfolio",
        technology: "React/Bulma",
        imageUrl: "https://wallpaperplay.com/walls/full/b/9/6/74908.jpg",
        link: "www.google.com",
        id: 1
    }, {
        title: "My Portfolio",
        technology: "React/Bulma",
        imageUrl: "https://wallpaperplay.com/walls/full/b/9/6/74908.jpg",
        link: "www.google.com",
        id: 2
    }, {
        title: "My Portfolio",
        technology: "React/Bulma",
        imageUrl: "https://wallpaperplay.com/walls/full/b/9/6/74908.jpg",
        link: "www.google.com",
        id: 3
    }, 
    {
        title: "My Portfolio",
        technology: "React/Bulma",
        imageUrl: "https://wallpaperplay.com/walls/full/b/9/6/74908.jpg",
        link: "www.google.com",
        id: 4
    }
];

const projectStyle = i => ({
    backgroundImage: "url(" + projects[i].imageUrl + ")"
});


const Projects = () => {

    const [title, setTitle] = useState("hidden");
    const [subtitle, setSubtitle] = useState("hidden");
    const [button, setButton] = useState("hidden");

    const onHover = () => {
    setTitle("title has-text-primary has-text-centered is-spaced has-text-weight-bold");
    setSubtitle("subtitle has-text-primary has-text-centered is-spaced has-text-weight-medium");
    setButton("button is-centered is-primary is-outlined is-rounded")
}


    return (
        <div className="columns projects is-variable is-centered is-multiline is-mobile is-2">
            {projects.map((project, i) => (
                <div key={project.id} className="column is-one-quarter-desktop is-two-fifths-tablet is-half-mobile">
                    <div onMouseOver={onHover} class="inside-div" style={projectStyle(i)}>
                        <h1
                            className={title}>
                            {project.title}
                        </h1>
                        <h2
                            className={subtitle}>
                            {project.technology}
                        </h2>
                        <Link
                            className={button}
                            exact
                            to={project.link}>Visit
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
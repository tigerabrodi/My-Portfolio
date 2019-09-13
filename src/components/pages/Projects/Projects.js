import React from 'react';
import {Link} from "react-router-dom";
import "./Projects.css";

const projectStyle = i => ({
    backgroundImage: "url(" + projects[i].imageUrl + ")"
});

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
    }
]

const Projects = () => {
    return (
        <div className="columns is-variable is-centered is-5">
            {projects.map((project, i) => (
                <div style={projectStyle(i)} className="column">
                    <h1
                        className="title has-text-primary has-text-centered is-spaced has-text-weight-bold">
                        {project.title}
                    </h1>
                    <h2
                        className="subtitle has-text-primary has-text-centered is-spaced has-text-weight-medium">
                        {project.technology}
                    </h2>
                    <Link
                        className="button is-centered is-primary is-outlined is-rounded"
                        exact
                        to={project.link}>Visit
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Projects;
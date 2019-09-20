import React from 'react';
import "./Projects.css";


const projects = [
    {
        title: "My Portfolio",
        technology: "React/Bulma",
        imageUrl: "https://wallpaperplay.com/walls/full/b/9/6/74908.jpg",
        link: "https://www.udemy.com",
        id: 1
    }, {
        title: "My Portfolio",
        technology: "React/Bulma",
        imageUrl: "https://wallpaperplay.com/walls/full/b/9/6/74908.jpg",
        link: "https://www.udemy.com",
        id: 2
    }, {
        title: "My Portfolio",
        technology: "React/Bulma",
        imageUrl: "https://wallpaperplay.com/walls/full/b/9/6/74908.jpg",
        link: "https://www.udemy.com",
        id: 3
    }, 
    {
        title: "My Portfolio",
        technology: "React/Bulma",
        imageUrl: "https://wallpaperplay.com/walls/full/b/9/6/74908.jpg",
        link: "https://www.udemy.com",
        id: 4
    }
];

const projectStyle = i => ({
    background: "url(" + projects[i].imageUrl + ")",
});


const Projects = () => {

        return (
            <div className="columns projects is-variable is-centered is-multiline is-mobile is-2">
                {projects.map((project, i) => (
                    <div key={project.id} className="column is-one-quarter-desktop is-two-fifths-tablet is-half-mobile">
                        <div className="inside-div" style={projectStyle(i)}>
                            <h1 className="title has-text-primary has-text-centered is-spaced has-text-weight-bold">
                                {project.title}
                            </h1>
                            <h2 className="hidden subtitle has-text-primary has-text-centered is-spaced has-text-weight-medium">
                                {project.technology}
                            </h2>
                            <a
                                className="button is-centered is-primary is-outlined is-rounded"
                                href={project.link} target="_blank">Visit
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        );
}

export default Projects;
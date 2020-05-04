import React from 'react';
import { connect } from 'react-redux';

import ProjectCard from '../components/ProjectCard';

import '../assets/styles/containers/Projects.scss'

const Projects = ({ projects }) => (
    <div className="projects">
        <div className="projects__title">
            <h1>Projects</h1>
        </div>
        <div className="projects__list">
            {projects.map((project, index) =>
                <ProjectCard key={index} img={project.img} name={project.name} description={project.description} tags={project.tags} url={project.url} type={project.type} />
            )}
        </div>
    </div>
);

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
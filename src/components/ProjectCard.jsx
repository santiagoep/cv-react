import React from 'react';

import '../assets/styles/components/ProjectCard.scss';
const ProjectCard = ({ img, name, description, tags, url, type }) => {

    return (
        <div className="project-card">
            <div className="project-card__title">
                {name}
            </div>
            <div className="project-card__description">
                <p>
                    {description} ({type} project).
                </p>
            </div>
            <div className="project-card__image">
                <img src={img} alt="" />
            </div>
            <div className="project-card__tags">
                <ul>
                    {tags.map((tag, index) =>
                        <li key={index}>{tag}</li>
                    )}
                </ul>
            </div>
            <div className="project-card__url">
                See more in <a href={url}>{url}</a>
            </div>
        </div>
    )
}

export default ProjectCard;
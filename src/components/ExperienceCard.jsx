import React from 'react';

import '../assets/styles/components/ExperienceCard.scss'

const ExperienceCard = ({ position, company, startDate, endDate, location, description, image }) => (
    <div className="experience-card">
        <div className="experience-card__box1">
            <div className="experience-card__title">
                {position}
            </div>
            <div className="experience-card__company">
                {company}
            </div>
            <div className="experience-card__date">
                {startDate} - {endDate}
            </div>
            <div className="experience-card__location">
                {location}
            </div>
            <div className="experience-card__description">
                {description}
            </div>
        </div>
        <div className="experience-card__box2">
            <div className="experience-card__img">
                <img src={image} />
            </div>
        </div>
    </div>
);

export default ExperienceCard;


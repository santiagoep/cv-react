import React from 'react';

import '../assets/styles/components/EducationCard.scss';

const EducationCard = ({ name, title, startDate, endDate, image }) => (
    <div className="education-card">
        <div className="education-card__image">
            <img src={image} />
        </div>
        <div>
            <div className="education-card__title">
                {title}
            </div>
            <div className="education-card__name">
                {name}
            </div>
            <div className="education-card__date">
                {startDate} - {endDate}
            </div>
        </div>
    </div>
)

export default EducationCard;
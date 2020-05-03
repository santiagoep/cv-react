import React from 'react';

import '../assets/styles/components/TechnologyCard.scss';

const TechnologyCard = ({ name, img, date }) => (
    <div className="technology-card">
        <div className="technology-card__image">
            <img src={img} />
        </div>
        <div className="technology-card__text-header">
            <div className="technology-card__title">
                {name}
            </div>
            <div className="technology-card__date">
                {date}
            </div>
        </div>
    </div>
);

export default TechnologyCard;
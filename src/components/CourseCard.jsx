import React from 'react';

import '../assets/styles/components/CourseCard.scss';

const CourseCard = ({ name, institute, image }) => (
    <div className="course-card">
        <div className="course-card__image">
            <img src={image} />
        </div>
        <div>
            <div className="course-card__name">
                {name}
            </div>
            <div className="course-card__institute">
                {institute}
            </div>
        </div>
    </div>
)

export default CourseCard;
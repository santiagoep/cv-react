import React from 'react';

import '../assets/styles/components/CertificationCard.scss';

const CertificationCard = ({ name, company, expeditionDate, dueDate, credentialId, image }) => (
    <div className="certification-card">
        <div className="certification-card__image">
            <img src={image} />
        </div>
        <div>
            <div className="certification-card__name">
                {name}
            </div>
            <div className="certification-card__company">
                {company}
            </div>
            <div className="certification-card__credential-id">
                id: {credentialId}
            </div>
            <div className="certification-card__date">
                {expeditionDate} - {dueDate}
            </div>
        </div>
    </div>
)

export default CertificationCard;
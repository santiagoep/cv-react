import React from 'react';

import PageNotFoundImage from '../assets/static/page_not_found.svg';

import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
    <div className="page-not-found">
        <img src={PageNotFoundImage} />
    </div>
)

export default NotFound;
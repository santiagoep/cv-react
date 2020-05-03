import React from 'react';
import { connect } from 'react-redux';

import TechnlogyCard from '../components/TechnologyCard';

import '../assets/styles/containers/technologies.scss';

const Technlogies = ({ technologies }) => {
    return (
        <div className="technologies">
            <div className="technologies__title">
                <h1>Technologies</h1>
            </div>
            {technologies.map((technology, index) =>
                <TechnlogyCard key={index} name={technology.name} img={technology.img} date={technology.date} projects={technology.projects} />
            )}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        technologies: state.technologies
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Technlogies);
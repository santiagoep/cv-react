import React from 'react';
import { connect } from 'react-redux';

import ExperienceCard from '../components/ExperienceCard';

import '../assets/styles/containers/Experience.scss'

const Experience = ({ jobs }) => {
    return (
        <div className="experience-list">
            {jobs.map(job =>
                <ExperienceCard
                    key={job.id}
                    position={job.position}
                    company={job.company}
                    startDate={job.startDate}
                    endDate={job.startDate}
                    location={job.location}
                    description={job.description}
                    image={job.image}
                />
            )}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        jobs: state.jobs
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Experience);
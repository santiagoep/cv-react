import React from 'react';
import { connect } from 'react-redux';

import ExperienceCard from '../components/ExperienceCard';

import '../assets/styles/containers/Experience.scss'

const Experience = ({ jobs }) => {
    return (
        <div className="experience">
            <div className="experience__title">
                <h1>
                    Experience
                </h1>
            </div>
            <div className="experience__list">
                {jobs.map((job, index) =>
                    <ExperienceCard
                        key={index}
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
import React from 'react';
import { connect } from 'react-redux';

import CourseCard from '../components/CourseCard';
import CertificationCard from '../components/CertificationCard';
import EducationCard from '../components/EducationCard';

import '../assets/styles/containers/Education.scss';

const Education = ({ education, courses, certifications }) => {
    return (
        <div className="education">
            <div className="education__education">
                <h3>Education</h3>
                <ul>
                    {education.map(institute =>
                        <li><EducationCard name={institute.name} title={institute.title} startDate={institute.startDate} endDate={institute.endDate} image={institute.image} /></li>
                    )}
                </ul>
            </div>
            <div className="education__certifications">
                <h3>Certifications</h3>
                <ul>
                    {certifications.map(certification =>
                        <li>
                            <CertificationCard
                                name={certification.name}
                                company={certification.company}
                                expeditionDate={certification.expeditionDate}
                                dueDate={certification.dueDate}
                                credentialId={certification.credentialId}
                                image={certification.image}
                            />
                        </li>
                    )}
                </ul>
            </div>
            <div className="education__courses">
                <h3>Courses</h3>
                <ul>
                    {courses.map(course =>
                        <li>
                            <CourseCard
                                name={course.name}
                                institute={course.institute}
                                image={course.image}
                            />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        education: state.education,
        courses: state.courses,
        certifications: state.certifications
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Education);
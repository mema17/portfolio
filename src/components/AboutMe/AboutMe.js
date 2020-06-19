import React from 'react'
import AboutCard from './../aboutCard/AboutCard';
import ExperienceCard from './../experienceCard/ExperienceCard'
import { Box } from 'grommet'
import WORK_EXPERIENCE from './../../data/workExperienceData';


import './AboutMe.scss'

const experiences = WORK_EXPERIENCE.map((experience, index) => {
    return (
        <ExperienceCard data={experience} key={index} />
    )
});

export default function AboutMe() {
    return (
        <div className="about-me">
            {/* <h2 class="access-hidden">About me, some of my projects</h2> */}
            <AboutCard />
             {experiences} 
        </div>
    )
}

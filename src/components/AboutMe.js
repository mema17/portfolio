import React from 'react'

import WORK_EXPERIENCE from '../data/workExperienceData';
import AboutCard from './aboutCard/AboutCard';
import ExperienceCard from './experienceCard/ExperienceCard'

import styled from 'styled-components'
import {SrOnly} from '../styles/lib'

const StyledAboutMe = styled.section`
    padding: 2rem;
    columns: 25rem 4;
    column-gap: 3rem;
`;

const experiences = WORK_EXPERIENCE.map((experience, index) => {
    return (
        <ExperienceCard data={experience} key={index} />
    )
});

export default function AboutMe() {
    return (
        <StyledAboutMe>
            <SrOnly>
                <h2>About me, some of my projects</h2>
            </SrOnly>
            <AboutCard />
            {experiences}
        </StyledAboutMe>
    )
}

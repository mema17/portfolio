import React from 'react'

import WORK_EXPERIENCE from '../data/workExperienceData';
import AboutCard from './AboutCard';
import ExperienceCard from './ExperienceCard'

import styled from 'styled-components'
import {SrOnly} from '../styles/lib'
import screenSize from '../styles/screenSizes'


const StyledAboutMe = styled.section`
    padding: 2rem;
    columns: 25rem 4;
    column-gap: 3rem;
    
    @media screen and ${screenSize.tablet}{
        columns: 30rem 4;
    }
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

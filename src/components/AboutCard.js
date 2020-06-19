import React from 'react'
import { Box, Avatar } from 'grommet'
import { StatusInfoSmall } from 'grommet-icons'

import styled from 'styled-components'
import colors from '../styles/colors'

const StyledAboutCard = styled.div`
    margin: 2rem 0;
    padding:2rem;
    background-color: ${colors.WHITE};
    border-radius: 0.3rem;
    box-shadow: 0 0.8rem 3rem -0.6rem rgba(0, 0, 0, 0.3);
    font-size: 1.4rem;

    & > div >span{
        margin-left: 1.5rem;
        align-self: center;
        font-weight: 600;
    }

    & ul{
        list-style-type: none;
        padding-left: 1rem;
    }

    & ul li{
        line-height: 2rem;
    }

    & ul li svg{
        margin-right:2rem;
    }
`;
const facts = [
    "Cheerful personality",
    "Always up for a challenge",
    "Loves doodling and painting",
    "Picked up figure skating 3 years ago",
    "Animated movies fan"
]

const renderFacts = (facts) => {
    return (facts.map((fact, index) => {
        return (
            <li key={index}>
                <StatusInfoSmall color={colors.AZURE} size="small" />
                {fact}
            </li>

        )
    }))
}
export default function AboutCard() {
    return (
        <StyledAboutCard>
            <Box direction="row">
                <Avatar size="xlarge" src={process.env.PUBLIC_URL + "/assets/images/profile-picture.png"} />
                <span id="character-desc-list">Some random facts:</span>
            </Box>
            <ul aria-labelledby="character-desc-list">
                {renderFacts(facts)}
            </ul>
        </StyledAboutCard>
    )
}

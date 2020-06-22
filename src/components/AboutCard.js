import React from 'react'
import { Box, Avatar } from 'grommet'

import styled from 'styled-components'
import colors from '../styles/colors'

const StyledAboutCard = styled(Box)`
    margin: 2rem 0;
    padding: 3rem 0 2rem;
    align-items: center;
    border-radius: 1rem;
    //background-image: linear-gradient(to top right, #edf0f0, #ffffff);
    background-color: ${colors.WHITE};
    box-shadow: 0.9rem 1.4rem 5.2rem 0.3rem rgba(60,63,91,0.48);

    font-size: 1.4rem;

    & > span{
        margin-top: 2rem;
        align-self: center;
        text-align-center;
        font-family: "roboto-black"
    }

    & ul{
        list-style-type: none;
        text-align: center;
        padding: 0;
    }

    & ul li{
        line-height: 2rem;
    }
`;
const StyledAvatar = styled(Avatar)`
    width: 14rem;
    height:14rem;
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
                {fact}
            </li>

        )
    }))
}
export default function AboutCard() {
    return (
        <StyledAboutCard>
            <StyledAvatar src={process.env.PUBLIC_URL + "/assets/images/profile-picture.png"} />
            <span id="character-desc-list">Some random facts:</span>
            <ul aria-labelledby="character-desc-list">
                {renderFacts(facts)}
            </ul>
        </StyledAboutCard>
    )
}

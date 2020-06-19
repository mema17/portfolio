import React from 'react'

import resume from './../data/resume-melanie-mathey-english.jpg'

import styled from 'styled-components'
import {ButtonLink} from '../styles/lib'
import colors from '../styles/colors'
import screenSize from '../styles/screenSizes'

const StyledIntro = styled.section`
    padding: 5rem;
    & > p {
        margin-bottom: 5rem;
        color: ${colors.WHITE};
    }
    & > div{
        width: 100%;
        
    }
    & > div > a{
        display: block;
        margin-bottom: 2rem;
    }
    @media screen and ${screenSize.mobileL} {
        & > div{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        & > div > a {
            width: 12rem;
        }
    }

    @media screen and ${screenSize.tablet} {
        width: 50%;
        margin: 0 auto;
        text-align: center;
        max-width: 46rem;
}

`;

const StyledTitle = styled.h1`
    position: relative;
    margin-bottom: 5rem;
    color: ${colors.WHITE};
    font-family: "libreBaskerville-regular";
    font-weight: normal;
    font-size: 4rem;
    line-height: 5rem;

    &:after {
        content: " ";
        position: absolute;
        left: calc(50% - 2.5rem);
        left: 0;
        bottom: -2.5rem;
        width: 4rem;
        height: 0.3rem;
        background-color: ${colors.WHITE};
    }
    @media screen and ${screenSize.tablet}{
        &:after {
            left: calc(50% - 2rem);
        }
    }`;


export default function Intro() {
    return (
        <StyledIntro>
            <StyledTitle>Hello! Welcome to my portfolio</StyledTitle>
            <p>
            I'm Mélanie Mathey, a Paris-based software engineer, UX designer and dedicated doodler. Here are some of the projects I worked on.
            </p>
            <div>
                <ButtonLink 
                href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#101;&#108;&#97;&#110;&#105;&#101;&#46;&#109;&#97;&#116;&#104;&#101;&#121;&#64;&#111;&#117;&#116;&#108;&#111;&#111;&#107;&#46;&#99;&#111;&#109;" 
                rel="noopener noreferrer"
                >&#71;&#101;&#116;&#32;&#105;&#110;&#32;&#116;&#111;&#117;&#99;&#104;
                </ButtonLink>
                <ButtonLink href={resume}target="_blank">Read my resume</ButtonLink>
            </div>
        </StyledIntro>
    )
}

import React from 'react'

import { Button, Layer, Image } from 'grommet'
import { Close } from 'grommet-icons'

import styled from 'styled-components'
import { Hashtag, ButtonLinkModal } from '../styles/lib'
import colors from '../styles/colors'
import screenSize from '../styles/screenSizes'

const StyledExperience = styled.a`
    display: inline-block;
    position: relative;
    margin: 2rem 0;
    clear: both;
    text-decoration: none;
    
    &:focus {
        outline: 0.1rem dashed ${colors.WHITE};
        outline-offset: 0.2rem;
    }
`;
const StyledThumbnail = styled.div`

    width: calc(100%- 4rem);
    padding: 1.5rem 2rem;
    
    border-radius: 0.3rem;
    background-color: ${colors.WHITE};
    box-shadow: 0 0.8rem 3rem -0.6rem rgba(0, 0, 0, 0.3);
    
    text-decoration: none;
    font-size: 1.4rem;    
    
    &>img{
        display: block;
        width: calc(100% + 4rem);
        margin-left: -2rem;
        margin-top: -1.5rem;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
    }
    
    & > h3{
        margin: 2rem 0 0;
        text-transform: uppercase;
        color: ${colors.PINK};
        font-weight: 700;
        font-size: 1.4rem;
    }
    
    & > p{
        color: ${colors.DARKGRAY};
        margin :  0.5rem 0;
    }
    & > div{
        margin-bottom : 1rem;
    }

`;
const StyledLayer = styled(Layer)`
    box-sizing: border-box;
    padding: 1rem 1.5em 5rem;
    border: none;
    border-radius: 0.3rem;
    background: ${colors.WHITE};
    height: calc(100vh - 15rem);
    overflow-y: scroll;

    & h1{
        font-family: "roboto-bold";
        text-transform: uppercase;
        color: ${colors.PINK};
        font-size: 1.6rem;
        text-align: center;
        margin: 0;
    }
    & h2{
        display: block;
        text-align: center;
        margin: 0 0 2rem;
        font-size: 1.6rem;
        font-weight: normal;
    }
    & h2 + div {
        margin-bottom: 3rem;
    }
    & img{
            box-sizing: border-box;
            width: 100%;
            margin-bottom: 1rem;
            max-height: 30rem;
            object-fit: contain;

    }

    @media screen and ${screenSize.tablet}{
        width: 65%;
    }
    @media screen and ${screenSize.mobileM}{
       width: 50%;
    }
`;

const listJobs = (jobs) => {
    return (jobs.map((job, index) => {
        return (
            <Hashtag key={index}>{job}</Hashtag>
        )
    }))
}
const listLanguages = (languages) => {
    return (languages.map((language, index) => {
        return (
            <Hashtag task key={index}>{language}</Hashtag>
        )
    }))
}
const cleanFullDesc = (fulldesc) => {
    return (fulldesc.map((paragraph, index) => {
        return (
            <p key={index}>{paragraph}</p>
        )
    }))
}
export default function ExperienceCard({ data }) {
    const [show, setShow] = React.useState();
    return (
        <StyledExperience href="#">
            <StyledThumbnail onClick={() => setShow(true)}>
                <img src={process.env.PUBLIC_URL + "/assets/images/" + data.thumbnailPath} alt="" />
                <h3>{data.name}</h3>
                <p>{data.shortDesc}</p>
                <div>
                    {listJobs(data.jobs)}
                    {listLanguages(data.languages)}
                </div>
            </StyledThumbnail>


            {show && (
                // work experience details modal
                <StyledLayer
                    onEsc={() => setShow(false)}
                    onClickOutside={() => setShow(false)}
                    animation="fadeIn"
                >
                    <Button icon={<Close />} a11yTitle="close modal" onClick={() => setShow(false)} />
                    <h1>{data.name}</h1>
                    <h2>{data.shortDesc}</h2>
                    <div>
                        {listJobs(data.jobs)}
                        {listLanguages(data.languages)}
                    </div>
                    <Image src={process.env.PUBLIC_URL + "/assets/images/" + data.fullImgPath} alt="" />
                    <p>{cleanFullDesc(data.fullDesc)}</p>

                    <ButtonLinkModal
                        href={data.link.address}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data.link.name}
                    </ButtonLinkModal>
                </StyledLayer>
            )}
        </StyledExperience>
    )
}

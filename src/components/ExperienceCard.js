import React from 'react'

import { Button, Layer, Image, Avatar, Box } from 'grommet'
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
    
    border-radius: 1rem;
    background-color: ${colors.WHITE};
    box-shadow: 0.9rem 1.4rem 5.2rem 0.3rem rgba(60,63,91,0.48);
    
    text-decoration: none;
    font-size: 1.4rem;    
    color: ${colors.DARKGRAY};
    
    & > img{
        display: block;
        width: calc(100% + 4rem);
        margin-left: -2rem;
        margin-top: -1.5rem;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
    }
    
    & h3{
        margin: 0;
        font-size: 1.6rem;
        font-family: 'roboto-black';
    }

    & > div{
        margin-bottom : 1rem;
    }

`;
const StyledLayer = styled(Layer)`
    box-sizing: border-box;
    padding: 0 1.5em 5rem;
    border: none;
    border-radius: 0.3rem;
    background: ${colors.WHITE};
    height: 100%;
    //height: calc(100vh - 15rem);
    overflow-y: scroll;

    & .modal-close {
        position: sticky;
        top: 0;
        clear: both;
        margin-left: calc(100% - 4rem);
        border-radius: 50%;
    }
    & .modal-close:focus svg{
        outline: 0.1rem dashed ${colors.DARKGRAY};
        outline-offset: 0.2rem;
    }
    & .modal-close svg{
        border-radius: 50%;
        background-color: ${colors.LIGHTGRAY};
        border: 0.3rem solid ${colors.WHITE};
        padding: 1rem;
    }
    & img{
        width: calc(100% + 5rem);
        margin-left: -2.5rem;
        box-sizing: border-box;
        margin-bottom: 1rem;
        max-height: 30rem;
        object-fit: contain;
    }
    & h1{
        margin: 2rem 0 1rem;
        text-align: center;
        color: ${colors.AZURE};
        font-family: "roboto-black";
        font-size: 2.5rem;
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

    @media screen and ${screenSize.tablet}{
        margin-top: 4rem;
        width: 65%;
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
                <Box direction="row" gap="1.5rem" margin={{"vertical":"3rem"}}>
                    <Avatar size="medium" src={process.env.PUBLIC_URL + "/assets/images/logos/" + data.logo} />
                    <div>
                        <h3>{data.name}</h3>
                        <span>{data.shortDesc}</span>
                    </div>
                </Box>
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
                    <Button 
                    className="modal-close" 
                    icon={<Close size="small"/>} 
                    a11yTitle="close modal" 
                    focusIndicator="false"
                    onClick={() => setShow(false)} />
                    <Image src={process.env.PUBLIC_URL + "/assets/images/" + data.fullImgPath} alt="" />
                    <h1>{data.name}</h1>
                    <h2>{data.shortDesc}</h2>
                    <div>
                        {listJobs(data.jobs)}
                        {listLanguages(data.languages)}
                    </div>
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

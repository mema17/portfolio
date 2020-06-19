import React from 'react'
import { Button, Heading, Layer, Text, Image } from 'grommet'
import { Close } from 'grommet-icons'


import './experienceModal.scss'
import { Hashtag, ButtonLinkModal } from './../../styles/lib'

import styled from 'styled-components'
import colors from './../../styles/colors'

const StyledThumbnail = styled.div`
    display: inline-block;
    position: relative;
    clear: both;
    
    margin: 2rem 0;
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

export default function ExperienceCard({ data }) {
    const [show, setShow] = React.useState();
    return (
        // work experience card
        <div
            >
            <StyledThumbnail onClick={() => setShow(true)}>
                <img src={process.env.PUBLIC_URL + "/assets/images/" + data.thumbnailPath} 
                alt=""  />
                <h3>{data.name}</h3>
                <p>{data.shortDesc}</p>
                <div>
                    {listJobs(data.jobs)}
                    {listLanguages(data.languages)}
                </div>
            </StyledThumbnail>


            {show && (
                // work experience details modal
                <Layer
                    onEsc={() => setShow(false)}
                    onClickOutside={() => setShow(false)}
                    animation="fadeIn"
                    className="project-details-modal"
                >
                    <Button icon={<Close />} a11yTitle="close modal" onClick={() => setShow(false)} />
                    <Heading level="1">{data.name}</Heading>
                    <Heading level="2">{data.shortDesc}</Heading>
                    <div className="card_desc_hashtags">
                        {listJobs(data.jobs)}
                        {listLanguages(data.languages)}
                    </div>
                    <Image className="card__desc_img" src={process.env.PUBLIC_URL + "/assets/images/" + data.fullImgPath} alt=""></Image>
                    <p className="card__desc--text">{data.fullDesc}</p>
                    <ButtonLinkModal
                        href={data.link.address}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data.link.name}
                    </ButtonLinkModal>
                </Layer>
            )}
        </div>
    )
}

import React from 'react'
import { Box, Button, Heading, Layer, Text, Paragraph, Image } from 'grommet'
import { Close } from 'grommet-icons'


import './ExperienceCard.scss'
import './experienceModal.scss'
import {Hashtag, ButtonLinkModal} from './../../styles/lib'

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
        className="card"
        background="white">
            <Box onClick={() => setShow(true)}>
                {/* <Box width="100%"> */}
                    <Image className="card_img--main" src={process.env.PUBLIC_URL + "/assets/images/" + data.thumbnailPath} alt="" fit="cover"></Image>
                {/* </Box> */}
                <Heading level="3"
                color="accent-2">{data.name}</Heading>
                <Text className="card_job">{data.shortDesc}</Text>
               <div className="card_desc_hashtags">
                {listJobs(data.jobs)}
                {listLanguages(data.languages)}
               </div>
            </Box>
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
                        <Image className="card__desc_img" src={process.env.PUBLIC_URL + "/assets/images/" +  data.fullImgPath} alt=""></Image>
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

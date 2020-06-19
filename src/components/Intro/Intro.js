import React from 'react'
import { Box, Heading, Paragraph, Button } from 'grommet'
import "./intro.scss"
export default function Intro() {
    return (
        <Box className="intro">
            <Heading
            alignSelf="center"
            color="white"
            level="1"
            >Hello! Welcome to my portfolio</Heading>
            <p>
            I'm Mélanie Mathey, a Paris-based software engineer, UX designer and dedicated doodler. Here are some of the projects I worked on.
            </p>
            {/* <div class="button-wrapper">
                <Button 
                label="&#71;&#101;&#116;&#32;&#105;&#110;&#32;&#116;&#111;&#117;&#99;&#104;"
                href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#101;&#108;&#97;&#110;&#105;&#101;&#46;&#109;&#97;&#116;&#104;&#101;&#121;&#64;&#111;&#117;&#116;&#108;&#111;&#111;&#107;&#46;&#99;&#111;&#109;"
                className="btn-white"
                />
                <Button              
                href="assets//files/resume-melanie-mathey-english.jpg" 
                target="_blank" 
                label="Read my resume"
                rel="noopener noreferrer"
                className="btn-white"
                /> 
            </div> */}
            <div class="button-wrapper">
                <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#101;&#108;&#97;&#110;&#105;&#101;&#46;&#109;&#97;&#116;&#104;&#101;&#121;&#64;&#111;&#117;&#116;&#108;&#111;&#111;&#107;&#46;&#99;&#111;&#109;" rel="noopener noreferrer" class="btn-white">&#71;&#101;&#116;&#32;&#105;&#110;&#32;&#116;&#111;&#117;&#99;&#104;</a>
                <a href="assets//files/resume-melanie-mathey-english.jpg" target="_blank" class="btn-white">Read my resume</a>
            </div>
        </Box>
    )
}

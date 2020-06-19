import React from 'react'
import { Box, Avatar } from 'grommet'

import './aboutCard.scss';

export default function AboutCard() {
    return (
        <Box className="card_character">
            <Box direction="row">
                <div className="container">
                <Avatar size="xlarge" src={process.env.PUBLIC_URL + "/assets/images/profile-picture.png"} />
                <span id="character-desc-list">Some random facts:</span>
                </div>
            </Box>
            <ul className="card_character--facts" aria-labelledby="character-desc-list">
                <li>Cheerful personality</li>
                <li>Always up for a challenge</li>
                <li>Loves doodling and painting</li>
                <li>Picked up figure skating 3 years ago</li>
                <li>Animated movies fan</li>
            </ul>
        </Box>
    )
}

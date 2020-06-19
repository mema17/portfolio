import React from 'react'
import { Anchor, Box, Heading } from 'grommet'
import { Linkedin, Send } from 'grommet-icons'

import './contact.scss'
const links = [
    {
        href: "&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#101;&#108;&#97;&#110;&#105;&#101;&#46;&#109;&#97;&#116;&#104;&#101;&#121;&#64;&#111;&#117;&#116;&#108;&#111;&#111;&#107;&#46;&#99;&#111;&#109;",
        icon: <Send 
        color="accent-1"
        className="button-icon"/>,
        label: "Email"
    },
    {
        href: "https://fr.linkedin.com/in/m%C3%A9lanie-mathey-056111133",
        icon: <Linkedin 
        color="accent-1"
        className="button-icon"/>,
        label: "Linkedin"
    }
]
const renderLinks = (links) => {
    return (links.map((link, index) => {
        return (
            <a
            key={index}
                href={link.href}
                rel="noopener noreferrer">
                {link.icon}
                <span color="accent-1" className="button-link-text">
                    {link.label}
                </span>
            </a>
        )
    }))
}

export default function Contact() {
    return (
        <Box className="contact">
            <Heading level="2">Let's have a chat and discuss your project together</Heading>
            <Box className="button-wrapper" direction="row">
                {renderLinks(links)}
            </Box>
        </Box>
    )
}

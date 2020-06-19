import React from 'react';
import { Send, Linkedin, Github } from 'grommet-icons';
import { Header, Box} from 'grommet';

import "./header.scss";

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
    },
    {
        href: "https://github.com/mema17?tab=repositories",
        icon: <Github 
        color="accent-1"
        className="button-icon"/>,
        label: "GitHub"
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
export default function TopBar() {
    return (
        <Header className="header">
            <span className="logo">Mélanie Mathey</span>
            <Box className="button-wrapper" direction="row">
                {renderLinks(links)}
            </Box>
        </Header>
    )
}

import React from 'react'
import { Linkedin, Send } from 'grommet-icons'

import styled from 'styled-components';
import { LinkIcon } from '../styles/lib';
import colors from '../styles/colors';

const StyledContact = styled.section`
    box-sizing: border-box;
	width: 100%;
	margin: 0;
	padding: 10rem 1rem;
	background-color: ${colors.WHITE};
    text-align: center;
    
    & > h2{
        font-size: 2rem;
		margin-bottom: 3rem;
		color: ${colors.DEEPBLUE};
		max-width:100%;
    }
    
    & > div{
        display: flex;
		justify-content: center;
		text-decoration: none;
    }
    & > div a {
        margin: 0 2rem;
    }
`;

const links = [
    {
        href: "&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#101;&#108;&#97;&#110;&#105;&#101;&#46;&#109;&#97;&#116;&#104;&#101;&#121;&#64;&#111;&#117;&#116;&#108;&#111;&#111;&#107;&#46;&#99;&#111;&#109;",
        icon: <Send
            color="accent-1"
            className="button-icon" 
            size="large"/>,
        label: "Email"
    },
    {
        href: "https://fr.linkedin.com/in/m%C3%A9lanie-mathey-056111133",
        icon: <Linkedin
            color="accent-1"
            className="button-icon" 
            size="large"/>,
        label: "Linkedin"
    }
]
const renderLinks = (links) => {
    return (links.map((link, index) => {
        return (
            <LinkIcon
                key={index}
                href={link.href}
                rel="noopener noreferrer">
                {link.icon}
                <span>
                    {link.label}
                </span>
            </LinkIcon>
        )
    }))
}

export default function Contact() {
    return (
        <StyledContact>
            <h2>Let's have a chat and discuss your project together</h2>
            <div>
                {renderLinks(links)}
            </div>
        </StyledContact>
    )
}

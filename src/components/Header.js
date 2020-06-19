import React from 'react';
import { Send, Linkedin, Github } from 'grommet-icons';
import styled from 'styled-components';

import screenSize from '../styles/screenSizes';
import { LinkIcon } from '../styles/lib';
const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    padding: 1.5rem 2rem;
    background-color: rgba(255, 255, 255, 0.8);
    
    & > span{
        font-weight: 700;
        max-width: 7rem;
    }

    @media screen and ${screenSize.mobileL}{
        & > span{
            max-width: 20rem;
        }
    }
`;

const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    text-decoration: none;
`;

const links = [
    {
        href: "&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#109;&#101;&#108;&#97;&#110;&#105;&#101;&#46;&#109;&#97;&#116;&#104;&#101;&#121;&#64;&#111;&#117;&#116;&#108;&#111;&#111;&#107;&#46;&#99;&#111;&#109;",
        icon: <Send
            color="accent-1"
            className="button-icon" />,
        label: "Email"
    },
    {
        href: "https://fr.linkedin.com/in/m%C3%A9lanie-mathey-056111133",
        icon: <Linkedin
            color="accent-1"
            className="button-icon" />,
        label: "Linkedin"
    },
    {
        href: "https://github.com/mema17?tab=repositories",
        icon: <Github
            color="accent-1"
            className="button-icon" />,
        label: "GitHub"
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
                <span>{link.label}</span>
            </LinkIcon>
        )
    }))
}


export default function TopBar() {
    return (
        <StyledHeader>
            <span>Mélanie Mathey</span>
            <StyledButtonWrapper>
                {renderLinks(links)}
            </StyledButtonWrapper>
        </StyledHeader>
    )
}

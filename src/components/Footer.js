import React from 'react'

import styled from 'styled-components'
import colors from './../styles/colors'

const Footer = styled.footer`
    width: 100%;
    padding: 2rem 0;
    background-color: transparent;
    text-align: center;
    font-size: 1.4rem;
    color: ${colors.WHITE}
`;
export default function FooterBar() {
    return (
        <Footer>© Mélanie Mathey - 2020</Footer>
    )
}

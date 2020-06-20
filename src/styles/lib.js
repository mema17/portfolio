import styled from 'styled-components'
import colors from './colors'

export const SrOnly = styled.div`
    &:not(:focus):not(:active) {
        clip: rect(0 0 0 0); 
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap; 
        width: 1px;
    }
`;

export const Hashtag = styled.span`
    display: inline-block;
    margin: 0.5rem 0.5rem 0 0;
    padding: 0.3rem 1rem;
    
    background-color: ${props => props.task ? colors.PINK : colors.AZURE};
    border-radius: 0.3rem;
    
    color: ${colors.WHITE};
    font-size: 1.2rem;
    font-weight: 500;
`;

export const ButtonLink = styled.a`
    padding: 1.5rem 3rem;
    border-radius: 0.3rem;
    box-shadow: 0 0.8rem 3rem -0.6rem rgba(0, 0, 0, 0.3);
    background-color: ${colors.WHITE};
    
    text-decoration: none;
    text-align: center;
    color: ${colors.AZURE};

    &:focus {
        outline: 0.1rem dashed ${colors.WHITE};
        outline-offset: 0.2rem;
    }
`;

export const ButtonLinkModal = styled(ButtonLink)`
    display: block;    
    margin: 3rem auto 1rem;
    width: 40%;
    padding: 1 3rem;
    border: 0.3rem solid ${colors.PINK};
    
    color: ${colors.PINK};
    
    &:focus {
        outline-color: ${colors.PINK};
    }
`;

export const LinkIcon = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem;
    text-decoration: none;
    color: ${colors.DEEPBLUE};
    &:focus {
        outline: 0.1rem dashed ${colors.DEEPBLUE};
        outline-offset: 0.2rem;
    }
    &  > span{
        font-size: 1.4rem;
        margin-top: 0.6rem;
    }
`;
import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.section`
    background-color: ${props => props.theme.turquoise};
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 8vw));
    display: flex;
    justify-content: center;
    height: calc(100vh - 3.25rem);
    padding-top: 3.25rem;

    @media (min-width: ${props => props.theme.breakMed}) {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 6vw));
    }
`;
const HeroContent = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 1.25rem;

    @media (max-width: ${props => props.theme.breakSm}) {
        padding: 0;
        width: ${props => props.theme.contentSm};
    }
    @media (min-width: ${props =>
            props.theme.breakSm}) and (max-width: ${props =>
            props.theme.breakLrg}) {
        width: ${props => props.theme.contentMed};
    }
    @media (min-width: ${props => props.theme.breakLrg}) {
        width: ${props => props.theme.contentLrg};
    }
`;
const HeroHeader = styled.h1`
    align-items: center;
    display: flex;
    flex-grow: 1;
    flex-wrap: no-wrap;
    font-weight: 900;
    justify-content: center;
    margin: 0;

    @media (max-width: ${props => props.theme.breakSm}) {
        flex-direction: column;
        flex-grow: 0;
        font-size: 1.5rem;
    }
    @media (min-width: ${props =>
            props.theme.breakSm}) and (max-width: ${props =>
            props.theme.breakMed}) {
        flex-direction: column;
        flex-grow: 0;
        font-size: 3rem;
    }
    @media (min-width: ${props =>
            props.theme.breakMed}) and (max-width: ${props =>
            props.theme.breakLrg}) {
        font-size: 3rem;
    }
    @media (min-width: ${props => props.theme.breakLrg}) {
        font-size: 4rem;
    }
`;
const FeSpan = styled.span`
    position: relative;

    :after {
        color: ${props => props.theme.white};
        content: "&";
        display: none;
        position: absolute;
        top: 0;
    }
    @media (max-width: ${props => props.theme.breakSm}) {
        padding-right: 3.25rem;

        :after {
            display: block;
            font-size: 4.25rem;
            left: 84%;
            top: -${props => props.theme.spacingSm};
        }
    }
    @media (min-width: ${props =>
            props.theme.breakSm}) and (max-width: ${props =>
            props.theme.breakMed}) {
        padding-right: 0;

        :after {
            display: block;
            font-size: 7.75rem;
            left: 100%;
            padding-left: ${props => props.theme.spacingSm};
            top: -${props => props.theme.spacingSm};
        }
    }
`;
const AmpSpan = styled.span`
    color: ${props => props.theme.white};

    @media (max-width: ${props => props.theme.breakMed}) {
        display: none;
    }
    @media (min-width: ${props =>
            props.theme.breakMed}) and (max-width: ${props =>
            props.theme.breakLrg}) {
        font-size: 6rem;
        padding: 0 ${props => props.theme.spacingXs};
    }
    @media (min-width: ${props => props.theme.breakLrg}) {
        font-size: 7rem;
        padding: 0 ${props => props.theme.spacingXs};
    }
`;
const UxSpan = styled(FeSpan)`
    :after {
        content: none;
    }
    @media (max-width: ${props => props.theme.breakMed}) {
        align-self: flex-end;
    }
`;

const Hero = props => {
    return (
        <HeroWrapper id={props.id}>
            <HeroContent>
                <HeroHeader>
                    <FeSpan>Front-End Developer</FeSpan> <AmpSpan>&</AmpSpan>{" "}
                    <UxSpan>UX Designer</UxSpan>
                </HeroHeader>
            </HeroContent>
        </HeroWrapper>
    );
};

export default Hero;

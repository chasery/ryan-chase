import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
    display: flex;
    justify-content: center;
    position: relative;

    @media (max-width: ${props => props.theme.breakMed}) {
        padding: 2rem 0;
    }
    @media (min-width: ${props => props.theme.breakMed}) {
        padding: ${props => props.theme.spacingXlrg} 0;
    }
`;
const SectionContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.25rem;

    p {
        font-size: 1rem;
        font-weight: 300;
        line-height: 2rem;
        margin: 0 0 1rem;

        a {
            color: ${props => props.theme.mineShaft};
            font-weight: 600;

            &:hover,
            &:focus {
                color: ${props => props.theme.turquoise};
            }
        }
        strong {
            font-weight: 600;
        }
        &:last-child {
            margin-bottom: 0;
        }
    }

    @media (max-width: ${props => props.theme.breakSm}) {
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
const SectionTitle = styled.h2`
    font-weight: 700;

    @media (max-width: ${props => props.theme.breakMed}) {
        font-size: 1.5rem;
        margin: 0 0 ${props => props.theme.spacingSm};
    }
    @media (min-width: ${props => props.theme.breakMed}) {
        font-size: 2rem;
        margin: 0 0 1rem;
    }
`;

const Section = props => {
    return (
        <SectionWrapper id={props.id}>
            <SectionContent>
                <SectionTitle>{props.id}</SectionTitle>
                {props.children}
            </SectionContent>
        </SectionWrapper>
    );
};

export default Section;

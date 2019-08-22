import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.section`
    background-color: ${props => props.theme.turquoise};
    height: calc(100vh - 3.25rem);
    padding-top: 3.25rem;
`;

const Hero = props => {
    return <HeroWrapper id={props.id}>Hero</HeroWrapper>;
};

export default Hero;

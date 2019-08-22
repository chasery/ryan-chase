import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.section`
    background-color: ${props => props.theme.white};
    height: 100vh;
`;

const About = props => {
    return <AboutWrapper id={props.id}>About</AboutWrapper>;
};

export default About;

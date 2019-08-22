import React from "react";
import styled from "styled-components";

const SkillsWrapper = styled.section`
    background-color: ${props => props.theme.turquoise};
    height: 100vh;
`;

const Skills = props => {
    return <SkillsWrapper id={props.id}>Skills</SkillsWrapper>;
};

export default Skills;

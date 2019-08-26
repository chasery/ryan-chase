import React from "react";
import styled from "styled-components";

const SkillsWrapper = styled.section`
    height: 100vh;
`;

const Skills = props => {
    return <SkillsWrapper id={props.id}>Skills</SkillsWrapper>;
};

export default Skills;

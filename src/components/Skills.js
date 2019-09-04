import React from "react";
import styled from "styled-components";

import Section from "./shared/Section";

const SkillsWrapper = styled.section`
    height: 100vh;
`;

const Skills = props => {
    return <Section id={props.id}>Skills</Section>;
};

export default Skills;

import React, { useState } from "react";
import styled from "styled-components";

import Section from "./shared/Section";

const TabsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const TabsControlWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: ${props => props.theme.spacingLrg};
`;
const TabControl = styled.button`
    background-color: transparent;
    border: none;
    border-bottom: 0.25rem solid ${props => props.theme.mineShaft};
    color: ${props => props.theme.mineShaft};
    font-size: 1.25rem;
    font-weight: 700;
    outline: none;
    padding: ${props => props.theme.spacingXs} 0;
    text-align: center;

    &:hover,
    &:focus,
    &[class*="active"] {
        border-bottom: 0.25rem solid ${props => props.theme.turquoise};
        color: ${props => props.theme.turquoise};
    }
`;
const TabsContentWrapper = styled.div`
    padding-top: ${props => props.theme.spacingLrg};
`;
const Tab = styled.div``;

const Skills = props => {
    return (
        <Section id={props.id}>
            <TabsWrapper>
                <TabsControlWrapper>
                    <TabControl>Front-End Development</TabControl>
                    <TabControl>User Experience</TabControl>
                </TabsControlWrapper>
                <TabsContentWrapper>
                    <Tab>
                        <p>
                            Ryan currently works as a senior UX Designer, where
                            he leads a team that drives an empathic approach to
                            software. His background in design and development
                            fosters a collaborative environment between the two
                            groups, resulting in the creation of the best
                            product possible.
                        </p>
                    </Tab>
                    <Tab>
                        <p>
                            Ryan currently works as a senior UX Designer, where
                            he leads a team that drives an empathic approach to
                            software. His background in design and development
                            fosters a collaborative environment between the two
                            groups, resulting in the creation of the best
                            product possible.
                        </p>
                    </Tab>
                </TabsContentWrapper>
            </TabsWrapper>
        </Section>
    );
};

export default Skills;

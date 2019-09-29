import React, { useState } from "react";
import styled from "styled-components";

import Section from "./shared/Section";

const SkillsContent = styled.div`
    display: flex;

    @media (max-width: ${props => props.theme.breakSm}) {
        flex-direction: column;
    }
`;
const TabsWrapper = styled.div``;
const TabsControlWrapper = styled.div``;
const TabControl = styled.button``;
const TabsContentWrapper = styled.div``;
const Tab = styled.div``;

const Skills = props => {
    return (
        <Section id={props.id}>
            <SkillsContent>
                <TabsWrapper>
                    <TabsControlWrapper>
                        <TabControl>Front-End Development</TabControl>
                        <TabControl>User Experience</TabControl>
                    </TabsControlWrapper>
                    <TabsContentWrapper>
                        <Tab>
                            <p>
                                Ryan currently works as a senior UX Designer,
                                where he leads a team that drives an empathic
                                approach to software. His background in design
                                and development fosters a collaborative
                                environment between the two groups, resulting in
                                the creation of the best product possible.
                            </p>
                        </Tab>
                        <Tab>
                            <p>
                                Ryan currently works as a senior UX Designer,
                                where he leads a team that drives an empathic
                                approach to software. His background in design
                                and development fosters a collaborative
                                environment between the two groups, resulting in
                                the creation of the best product possible.
                            </p>
                        </Tab>
                    </TabsContentWrapper>
                </TabsWrapper>
            </SkillsContent>
        </Section>
    );
};

export default Skills;

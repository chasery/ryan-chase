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
    position: relative;
`;
const Tab = styled.div`
    opacity: 0;
    position: absolute;
    top: ${props => props.theme.spacingLrg};

    &[class*="active"] {
        opacity: 1;
    }
`;
const TabDescription = styled.p``;

const Skills = props => {
    const [activeTab, setActiveTab] = useState("frontEnd");

    return (
        <Section id={props.id}>
            <TabsWrapper>
                <TabsControlWrapper>
                    <TabControl
                        className={activeTab === "frontEnd" ? "active" : null}
                        onClick={() => setActiveTab("frontEnd")}
                    >
                        Front-End Development
                    </TabControl>
                    <TabControl
                        className={
                            activeTab === "userExperience" ? "active" : null
                        }
                        onClick={() => setActiveTab("userExperience")}
                    >
                        User Experience
                    </TabControl>
                </TabsControlWrapper>
                <TabsContentWrapper>
                    <Tab className={activeTab === "frontEnd" ? "active" : null}>
                        <TabDescription>
                            Ryan currently works as a senior UX Designer, where
                            he leads a team that drives an empathic approach to
                            software. His background in design and development
                            fosters a collaborative environment between the two
                            groups, resulting in the creation of the best
                            product possible.
                        </TabDescription>
                        <h4>Languages & Frameworks</h4>
                        <ul>
                            <li>
                                <div>
                                    <svg></svg>
                                </div>{" "}
                                HTML 5
                            </li>
                            <li>
                                <div>
                                    <svg></svg>
                                </div>{" "}
                                CSS 3
                            </li>
                            <li>
                                <div>
                                    <svg></svg>
                                </div>{" "}
                                JavaScript
                            </li>
                            <li>
                                <div>
                                    <svg></svg>
                                </div>{" "}
                                Git
                            </li>
                            <li>
                                <div>
                                    <svg></svg>
                                </div>{" "}
                                React
                            </li>
                            <li>
                                <div>
                                    <svg></svg>
                                </div>{" "}
                                Redux
                            </li>
                            <li>
                                <div>
                                    <svg></svg>
                                </div>{" "}
                                Styled-Components
                            </li>
                            <li>
                                <div>
                                    <svg></svg>
                                </div>{" "}
                                Jest
                            </li>
                            <li>
                                <div>
                                    <svg></svg>
                                </div>{" "}
                                Angular
                            </li>
                        </ul>
                    </Tab>
                    <Tab
                        className={
                            activeTab === "userExperience" ? "active" : null
                        }
                    >
                        <TabDescription>
                            It’s that goal of finding the perfect solution for
                            his end users’, that motivates Ryan. Staying in tune
                            with the latest software trends, he actively
                            searches for ways to employ modern approaches to his
                            user centric solutions. Ryan is very passionate
                            about usability and you shouldn’t be surprised if
                            you hear him exclaiming “That’s a bad user
                            experience!”
                        </TabDescription>
                        <h4>Process</h4>
                        <ul>
                            <li>
                                <div>
                                    <svg></svg>
                                </div>{" "}
                                Storyboarding
                            </li>
                            <li>
                                <div>
                                    <svg></svg>
                                </div>{" "}
                                Personas
                            </li>
                            <li>
                                <div>
                                    <svg></svg>
                                </div>{" "}
                                Journey Mapping
                            </li>
                            <li>
                                <div>
                                    <svg></svg>
                                </div>{" "}
                                User Flows
                            </li>
                            <li>
                                <div>
                                    <svg></svg>
                                </div>{" "}
                                Wireframing
                            </li>
                            <li>
                                <div>
                                    <svg></svg>
                                </div>{" "}
                                Rapid Prototyping
                            </li>
                            <li>
                                <div>
                                    <svg></svg>
                                </div>{" "}
                                User Testing
                            </li>
                            <li>
                                <div>
                                    <svg></svg>
                                </div>{" "}
                                Design Systems
                            </li>
                        </ul>
                    </Tab>
                </TabsContentWrapper>
            </TabsWrapper>
        </Section>
    );
};

export default Skills;

import React, { useState } from "react";
import styled from "styled-components";

import Section from "./shared/Section";
import Tabs from "./shared/Tabs/Tabs";
import Tab from "./shared/Tabs/Tab";

import { ReactComponent as Html5Icon } from "../assets/svg/front-end/html-5.svg";
import { ReactComponent as Css3Icon } from "../assets/svg/front-end/css-3.svg";
import { ReactComponent as JavaScriptIcon } from "../assets/svg/front-end/javascript.svg";
import { ReactComponent as GitIcon } from "../assets/svg/front-end/git.svg";
import { ReactComponent as ReactIcon } from "../assets/svg/front-end/react.svg";
import { ReactComponent as ReduxIcon } from "../assets/svg/front-end/redux.svg";
import { ReactComponent as StyledComponentsIcon } from "../assets/svg/front-end/styled-components.svg";
import { ReactComponent as JestIcon } from "../assets/svg/front-end/jest.svg";
import { ReactComponent as AngularIcon } from "../assets/svg/front-end/angular.svg";

import { ReactComponent as StoryboradingIcon } from "../assets/svg/user-experience/storyboarding.svg";
import { ReactComponent as PersonasIcon } from "../assets/svg/user-experience/personas.svg";
import { ReactComponent as JourneyMappingIcon } from "../assets/svg/user-experience/journey-mapping.svg";
import { ReactComponent as UserFlowsIcon } from "../assets/svg/user-experience/user-flows.svg";
import { ReactComponent as WireframingIcon } from "../assets/svg/user-experience/wireframing.svg";
import { ReactComponent as RapidPrototypingIcon } from "../assets/svg/user-experience/rapid-prototyping.svg";
import { ReactComponent as UserTestingIcon } from "../assets/svg/user-experience/user-testing.svg";
import { ReactComponent as DesignSystemsIcon } from "../assets/svg/user-experience/design-systems.svg";

const Skills = props => {
    const [activeTab, setActiveTab] = useState("frontEnd");

    return (
        <Section id={props.id}>
            <Tabs>
                <Tab
                    title="Front-End"
                    description="Ryan currently works as a senior UX Designer, where he
                        leads a team that drives an empathic approach to
                        software. His background in design and development
                        fosters a collaborative environment between the two
                        groups, resulting in the creation of the best product
                        possible."
                    subHeader="Languages & Frameworks"
                >
                    <ul>
                        <li>
                            <div>
                                <Html5Icon />
                            </div>{" "}
                            HTML 5
                        </li>
                        <li>
                            <div>
                                <Css3Icon />
                            </div>{" "}
                            CSS 3
                        </li>
                        <li>
                            <div>
                                <JavaScriptIcon />
                            </div>{" "}
                            JavaScript
                        </li>
                        <li>
                            <div>
                                <GitIcon />
                            </div>{" "}
                            Git
                        </li>
                        <li>
                            <div>
                                <ReactIcon />
                            </div>{" "}
                            React
                        </li>
                        <li>
                            <div>
                                <ReduxIcon />
                            </div>{" "}
                            Redux
                        </li>
                        <li>
                            <div>
                                <StyledComponentsIcon />
                            </div>{" "}
                            Styled-Components
                        </li>
                        <li>
                            <div>
                                <JestIcon />
                            </div>{" "}
                            Jest
                        </li>
                        <li>
                            <div>
                                <AngularIcon />
                            </div>{" "}
                            Angular
                        </li>
                    </ul>
                </Tab>
                <Tab
                    title="User Experience"
                    description="It’s that goal of finding the perfect solution for his
                    end users’, that motivates Ryan. Staying in tune with
                    the latest software trends, he actively searches for
                    ways to employ modern approaches to his user centric
                    solutions. Ryan is very passionate about usability and
                    you shouldn’t be surprised if you hear him exclaiming
                    “That’s a bad user experience!”"
                    subHeader="Process"
                >
                    <ul>
                        <li>
                            <div>
                                <StoryboradingIcon />
                            </div>{" "}
                            Storyboarding
                        </li>
                        <li>
                            <div>
                                <PersonasIcon />
                            </div>{" "}
                            Personas
                        </li>
                        <li>
                            <div>
                                <JourneyMappingIcon />
                            </div>{" "}
                            Journey Mapping
                        </li>
                        <li>
                            <div>
                                <UserFlowsIcon />
                            </div>{" "}
                            User Flows
                        </li>
                        <li>
                            <div>
                                <WireframingIcon />
                            </div>{" "}
                            Wireframing
                        </li>
                        <li>
                            <div>
                                <RapidPrototypingIcon />
                            </div>{" "}
                            Rapid Prototyping
                        </li>
                        <li>
                            <div>
                                <UserTestingIcon />
                            </div>{" "}
                            User Testing
                        </li>
                        <li>
                            <div>
                                <DesignSystemsIcon />
                            </div>{" "}
                            Design Systems
                        </li>
                    </ul>
                </Tab>
            </Tabs>
        </Section>
    );
};

export default Skills;

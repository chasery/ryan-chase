import React from "react";
import styled from "styled-components";

import Section from "./shared/Section";
import Tabs from "./shared/Tabs";

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

const SkillsList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: ${props => props.theme.spacingLrg};
    grid-row-gap: 1rem;
    margin: 0;
    padding: 0;

    li {
        align-items: center;
        display: flex;
        list-style: none;
    }
`;
const IconWrapper = styled.div`
    align-items: center;
    display: flex;
    height: 1.5rem;
    justify-content: center;
    margin-right: ${props => props.theme.spacingXs}
    width: 1.5rem;
`;

const Skills = props => {
    return (
        <Section id={props.id}>
            <Tabs>
                <div
                    title="Front-End"
                    description="Ryan currently works as a senior UX Designer, where he
                        leads a team that drives an empathic approach to
                        software. His background in design and development
                        fosters a collaborative environment between the two
                        groups, resulting in the creation of the best product
                        possible."
                    subHeading="Languages & Frameworks"
                >
                    <SkillsList>
                        <li>
                            <IconWrapper>
                                <Html5Icon />
                            </IconWrapper>
                            HTML 5
                        </li>
                        <li>
                            <IconWrapper>
                                <Css3Icon />
                            </IconWrapper>
                            CSS 3
                        </li>
                        <li>
                            <IconWrapper>
                                <JavaScriptIcon />
                            </IconWrapper>
                            JavaScript
                        </li>
                        <li>
                            <IconWrapper>
                                <GitIcon />
                            </IconWrapper>
                            Git
                        </li>
                        <li>
                            <IconWrapper>
                                <ReactIcon />
                            </IconWrapper>
                            React
                        </li>
                        <li>
                            <IconWrapper>
                                <ReduxIcon />
                            </IconWrapper>
                            Redux
                        </li>
                        <li>
                            <IconWrapper>
                                <StyledComponentsIcon />
                            </IconWrapper>
                            Styled-Components
                        </li>
                        <li>
                            <IconWrapper>
                                <JestIcon />
                            </IconWrapper>
                            Jest
                        </li>
                        <li>
                            <IconWrapper>
                                <AngularIcon />
                            </IconWrapper>
                            Angular
                        </li>
                    </SkillsList>
                </div>
                <div
                    title="User Experience"
                    description="It’s that goal of finding the perfect solution for his
                    end users’, that motivates Ryan. Staying in tune with
                    the latest software trends, he actively searches for
                    ways to employ modern approaches to his user centric
                    solutions. Ryan is very passionate about usability and
                    you shouldn’t be surprised if you hear him exclaiming
                    “That’s a bad user experience!”"
                    subHeading="Process"
                >
                    <SkillsList>
                        <li>
                            <IconWrapper>
                                <StoryboradingIcon />
                            </IconWrapper>
                            Storyboarding
                        </li>
                        <li>
                            <IconWrapper>
                                <PersonasIcon />
                            </IconWrapper>
                            Personas
                        </li>
                        <li>
                            <IconWrapper>
                                <JourneyMappingIcon />
                            </IconWrapper>
                            Journey Mapping
                        </li>
                        <li>
                            <IconWrapper>
                                <UserFlowsIcon />
                            </IconWrapper>
                            User Flows
                        </li>
                        <li>
                            <IconWrapper>
                                <WireframingIcon />
                            </IconWrapper>
                            Wireframing
                        </li>
                        <li>
                            <IconWrapper>
                                <RapidPrototypingIcon />
                            </IconWrapper>
                            Rapid Prototyping
                        </li>
                        <li>
                            <IconWrapper>
                                <UserTestingIcon />
                            </IconWrapper>
                            User Testing
                        </li>
                        <li>
                            <IconWrapper>
                                <DesignSystemsIcon />
                            </IconWrapper>
                            Design Systems
                        </li>
                    </SkillsList>
                </div>
            </Tabs>
        </Section>
    );
};

export default Skills;

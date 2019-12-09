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

import { ReactComponent as StoryboardingIcon } from "../assets/svg/user-experience/storyboarding.svg";
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

const skills = [
    {
        id: "1",
        title: "Front-End Development",
        description:
            "Ryan currently works as a senior UX Designer, where he leads a team that drives an empathic approach to software. His background in design and development fosters a collaborative environment between the two groups, resulting in the creation of the best product possible.",
        subHeading: "Languages & Frameworks",
        skills: [
            {
                name: "HTML 5",
                iconName: "Html5Icon"
            },
            {
                name: "CSS 3",
                iconName: "Css3Icon"
            },
            {
                name: "JavaScript",
                iconName: "JavaScriptIcon"
            },
            {
                name: "Git",
                iconName: "GitIcon"
            },
            {
                name: "React",
                iconName: "ReactIcon"
            },
            {
                name: "Redux",
                iconName: "ReduxIcon"
            },
            {
                name: "Styled-Components",
                iconName: "StyledComponentsIcon"
            }
        ]
    },
    {
        id: "2",
        title: "User Experience",
        description:
            "It’s that goal of finding the perfect solution for his end users’, that motivates Ryan. Staying in tune with the latest software trends, he actively searches for ways to employ modern approaches to his user centric solutions. Ryan is very passionate about usability and you shouldn’t be surprised if you hear him exclaiming “That’s a bad user experience!”",
        subHeading: "Process",
        skills: [
            {
                name: "Storyboarding",
                iconName: "StoryboardingIcon"
            },
            {
                name: "Personas",
                iconName: "PersonasIcon"
            },
            {
                name: "Journey Mapping",
                iconName: "JourneyMappingIcon"
            },
            {
                name: "User Flows",
                iconName: "UserFlowsIcon"
            },
            {
                name: "Wireframing",
                iconName: "WireframingIcon"
            },
            {
                name: "Rapid Prototyping",
                iconName: "RapidPrototypingIcon"
            },
            {
                name: "User Testing",
                iconName: "UserTestingIcon"
            },
            {
                name: "Design Systems",
                iconName: "DesignSystemsIcon"
            }
        ]
    }
];

const determineIcon = name => {
    switch (name) {
        case "Html5Icon":
            return <Html5Icon />;
        case "Css3Icon":
            return <Css3Icon />;
        case "JavaScriptIcon":
            return <JavaScriptIcon />;
        case "GitIcon":
            return <GitIcon />;
        case "ReactIcon":
            return <ReactIcon />;
        case "ReduxIcon":
            return <ReduxIcon />;
        case "StyledComponentsIcon":
            return <StyledComponentsIcon />;
        case "StoryboardingIcon":
            return <StoryboardingIcon />;
        case "PersonasIcon":
            return <PersonasIcon />;
        case "JourneyMappingIcon":
            return <JourneyMappingIcon />;
        case "UserFlowsIcon":
            return <UserFlowsIcon />;
        case "WireframingIcon":
            return <WireframingIcon />;
        case "RapidPrototypingIcon":
            return <RapidPrototypingIcon />;
        case "UserTestingIcon":
            return <UserTestingIcon />;
        case "DesignSystemsIcon":
            return <DesignSystemsIcon />;
        default:
            return <></>;
    }
};

const createTabs = skills.map(tab => {
    const skillsList = tab.skills.map(skill => {
        return (
            <li>
                <IconWrapper>{determineIcon(skill.iconName)}</IconWrapper>
                {skill.name}
            </li>
        );
    });

    return (
        <div
            key={tab.id}
            id={tab.id}
            title={tab.title}
            description={tab.description}
            subHeading={tab.subHeading}
        >
            <SkillsList>{skillsList}</SkillsList>
        </div>
    );
});

const Skills = props => {
    return (
        <Section id={props.id}>
            <Tabs>{createTabs}</Tabs>
        </Section>
    );
};

export default Skills;

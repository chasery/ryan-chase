import React from "react";

import { ReactComponent as Html5Icon } from "../../assets/svg/front-end/html-5.svg";
import { ReactComponent as Css3Icon } from "../../assets/svg/front-end/css-3.svg";
import { ReactComponent as JavaScriptIcon } from "../../assets/svg/front-end/javascript.svg";
import { ReactComponent as GitIcon } from "../../assets/svg/front-end/git.svg";
import { ReactComponent as ReactIcon } from "../../assets/svg/front-end/react.svg";
import { ReactComponent as ReduxIcon } from "../../assets/svg/front-end/redux.svg";
import { ReactComponent as StyledComponentsIcon } from "../../assets/svg/front-end/styled-components.svg";
import { ReactComponent as StoryboardingIcon } from "../../assets/svg/user-experience/storyboarding.svg";
import { ReactComponent as PersonasIcon } from "../../assets/svg/user-experience/personas.svg";
import { ReactComponent as JourneyMappingIcon } from "../../assets/svg/user-experience/journey-mapping.svg";
import { ReactComponent as UserFlowsIcon } from "../../assets/svg/user-experience/user-flows.svg";
import { ReactComponent as WireframingIcon } from "../../assets/svg/user-experience/wireframing.svg";
import { ReactComponent as RapidPrototypingIcon } from "../../assets/svg/user-experience/rapid-prototyping.svg";
import { ReactComponent as UserTestingIcon } from "../../assets/svg/user-experience/user-testing.svg";
import { ReactComponent as DesignSystemsIcon } from "../../assets/svg/user-experience/design-systems.svg";

export const determineIcon = name => {
    const HTML_5_ICON = "Html5Icon";
    const CSS_3_ICON = "Css3Icon";
    const JAVASCRIPT_ICON = "JavaScriptIcon";
    const GIT_ICON = "GitIcon";
    const REACT_ICON = "ReactIcon";
    const REDUX_ICON = "ReduxIcon";
    const STYLED_COMPONENT_ICON = "StyledComponentsIcon";
    const STORYBOARDING_ICON = "StoryboardingIcon";
    const PERSONAS_ICON = "PersonasIcon";
    const JOURNEY_MAPPING_ICON = "JourneyMappingIcon";
    const USER_FLOWS_ICON = "UserFlowsIcon";
    const WIREFRAMING_ICON = "WireframingIcon";
    const RAPID_PROTOTYPING_ICON = "RapidPrototypingIcon";
    const USER_TESTING_ICON = "UserTestingIcon";
    const DESIGN_SYSTEMS_ICON = "DesignSystemsIcon";

    switch (name) {
        case HTML_5_ICON:
            return <Html5Icon />;
        case CSS_3_ICON:
            return <Css3Icon />;
        case JAVASCRIPT_ICON:
            return <JavaScriptIcon />;
        case GIT_ICON:
            return <GitIcon />;
        case REACT_ICON:
            return <ReactIcon />;
        case REDUX_ICON:
            return <ReduxIcon />;
        case STYLED_COMPONENT_ICON:
            return <StyledComponentsIcon />;
        case STORYBOARDING_ICON:
            return <StoryboardingIcon />;
        case PERSONAS_ICON:
            return <PersonasIcon />;
        case JOURNEY_MAPPING_ICON:
            return <JourneyMappingIcon />;
        case USER_FLOWS_ICON:
            return <UserFlowsIcon />;
        case WIREFRAMING_ICON:
            return <WireframingIcon />;
        case RAPID_PROTOTYPING_ICON:
            return <RapidPrototypingIcon />;
        case USER_TESTING_ICON:
            return <UserTestingIcon />;
        case DESIGN_SYSTEMS_ICON:
            return <DesignSystemsIcon />;
        default:
            return <></>;
    }
};

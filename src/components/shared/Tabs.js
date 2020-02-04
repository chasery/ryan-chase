import React, { useState } from "react";
import styled from "styled-components";

const TabsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const TabsContentWrapper = styled.div`
    padding-top: ${props => props.theme.spacingLrg};
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
const Tab = styled.div`
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    ${props => props.theme.animation}

    &[class*="active"] {
        max-height: initial;
        opacity: 1;
        ${props => props.theme.animation}
    }
`;
const TabDescription = styled.p``;
const TabSubHeading = styled.h4``;

const Tabs = props => {
    const [activeTab, setActiveTab] = useState("1");
    const children = props.children;

    const createTabs = React.Children.map(children, child => {
        return (
            <Tab
                key={child.props.id}
                id={child.props.id}
                title={child.props.title}
                className={activeTab === child.props.id ? "active" : null}
            >
                {child.props.description && (
                    <TabDescription>{child.props.description}</TabDescription>
                )}
                {child.props.subHeading && (
                    <TabSubHeading>{child.props.subHeading}</TabSubHeading>
                )}
                {child.props.children}
            </Tab>
        );
    });

    const createTabControls = createTabs.map(tab => {
        return (
            <TabControl
                key={tab.props.id}
                className={activeTab === tab.props.id ? "active" : null}
                onClick={() => setActiveTab(tab.props.id)}
            >
                {tab.props.title}
            </TabControl>
        );
    });

    return (
        <TabsWrapper>
            <TabsControlWrapper>{createTabControls}</TabsControlWrapper>
            <TabsContentWrapper>{createTabs}</TabsContentWrapper>
        </TabsWrapper>
    );
};

export default Tabs;

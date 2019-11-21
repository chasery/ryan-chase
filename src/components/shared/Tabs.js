import React, { useState } from "react";
import styled from "styled-components";

const TabsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const TabsContentWrapper = styled.div`
    position: relative;
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
    opacity: 1;
    padding-top: ${props => props.theme.spacingLrg};

    &[class*="active"] {
        opacity: 1;
    }
`;
const TabDescription = styled.p``;
const TabSubHeading = styled.h4``;

const Tabs = props => {
    const [activeTab, setActiveTab] = useState("frontEnd");
    const children = props.children;

    const getTabControls = React.Children.map(children, child => {
        if (child.props.title) {
            return <TabControl>{child.props.title}</TabControl>;
        }
    });
    const getTabs = React.Children.map(children, child => {
        if (child.props.title) {
            return (
                <Tab>
                    {child.props.description && (
                        <TabDescription>
                            {child.props.description}
                        </TabDescription>
                    )}
                    {child.props.subHeading && (
                        <TabSubHeading>{child.props.subHeading}</TabSubHeading>
                    )}
                    {child.props.children}
                </Tab>
            );
        }
    });

    return (
        <TabsWrapper>
            <TabsControlWrapper>{getTabControls}</TabsControlWrapper>
            <TabsContentWrapper>{getTabs}</TabsContentWrapper>
        </TabsWrapper>
    );
};

export default Tabs;

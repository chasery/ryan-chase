import React, { useState } from "react";
import styled from "styled-components";

const TabWrapper = styled.div`
    opacity: 1;
    position: absolute;
    top: ${props => props.theme.spacingLrg};

    &[class*="active"] {
        opacity: 1;
    }
`;
const TabDescription = styled.p``;
const TabSubHeading = styled.h4``;

const Tab = props => {
    return (
        <TabWrapper>
            <TabDescription>{props.description}</TabDescription>
            <TabSubHeading>{props.subHeading}</TabSubHeading>
            {props.children}
        </TabWrapper>
    );
};

export default Tab;

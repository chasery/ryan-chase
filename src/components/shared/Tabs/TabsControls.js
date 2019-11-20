import React, { useState } from "react";
import styled from "styled-components";

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

const TabsControls = () => {
    return (
        <TabsControlWrapper>
            <TabControl>Front-End Development</TabControl>
            <TabControl>User Experience</TabControl>
        </TabsControlWrapper>
    );
};

export default TabsControls;

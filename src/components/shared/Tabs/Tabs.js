import React from "react";
import styled from "styled-components";

import TabsControls from "./TabsControls";

const TabsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const TabsContentWrapper = styled.div`
    position: relative;
`;

const Tabs = props => {
    return (
        <TabsWrapper>
            <TabsControls></TabsControls>
            <TabsContentWrapper>{props.children}</TabsContentWrapper>
        </TabsWrapper>
    );
};

export default Tabs;

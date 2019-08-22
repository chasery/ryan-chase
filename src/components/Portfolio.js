import React from "react";
import styled from "styled-components";

const PortfolioWrapper = styled.section`
    background-color: ${props => props.theme.white};
    height: 100vh;
`;

const Portfolio = props => {
    return <PortfolioWrapper id={props.id}>Portfolio</PortfolioWrapper>;
};

export default Portfolio;

import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

import Header from "./Header/Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";

/**
 * Normalizing and setting Global Styles of App
 */
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,600,700,900&display=swap');
    ${styledNormalize}

    body {
        background-color: ${props => props.theme.white};
        color: ${props => props.theme.mineShaft};
        font-family: ${props => props.theme.font};
        font-weight: 300;
        overflow: none;
    }

    ::selection {
        color: ${props => props.theme.white}; 
        background: ${props => props.theme.turquoise};
    }
`;

const theme = {
    turquoise: "#50E3C2",
    mineShaft: "#333333",
    white: "#ffffff",
    font: "'Nunito Sans', sans-serif",
    spacingXs: ".5rem", // 8px
    spacingSm: ".75rem", // 12px
    spacingMed: "1.5rem", // 24px
    spacingLrg: "3rem", // 48px
    spacingXlrg: "4rem", // 64px

    // Responsive breakpoints and content size
    breakSm: "48rem",
    breakMed: "62rem",
    breakLrg: "75rem",
    contentSm: "100%",
    contentMed: "60rem",
    contentLrg: "71.25rem"
};

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppWrapper>
                <GlobalStyle />
                <Header />
                <Hero id="Hero" />
                <About id="About" />
                <Skills id="Skills" />
                {/* <Portfolio id="Portfolio" /> */}
            </AppWrapper>
        </ThemeProvider>
    );
};

export default App;

import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

import Header from "./Header";

/**
 * Normalizing and setting Global Styles of App
 */
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,600,700,900&display=swap');
    ${styledNormalize}

    body {
        background-color: ${props => props.theme.turquoise};
        color: ${props => props.theme.mineShaft};
        font-family: ${props => props.theme.font};
        font-weight: 300;
    }
`;

const theme = {
    turquoise: "#50E3C2",
    mineShaft: "#333333",
    white: "#ffffff",
    font: "'Nunito Sans', sans-serif",
    spacingSm: ".5rem", // 8px
    spacingReg: ".75rem", // 12px
    spacingMed: "1.5rem", // 24px
    spacingLrg: "3rem", // 48px
    spacingXlrg: "4rem" // 64px
};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <GlobalStyle />
                <Header />
            </React.Fragment>
        </ThemeProvider>
    );
};

export default App;

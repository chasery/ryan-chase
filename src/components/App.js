import React from "react";
import { createGlobalStyle } from "styled-components";
import styledNormalize from "styled-normalize";

import Header from "./Header";

/**
 * Normalizing and setting Global Styles of App
 */
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,600,700,900&display=swap');
    ${styledNormalize}

    body {
        background-color: #50E3C2;
        font-family: 'Nunito Sans', sans-serif;
        font-weight: 300;
    }
`;

const App = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <Header />
        </div>
    );
};

export default App;

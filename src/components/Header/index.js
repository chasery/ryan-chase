import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

import { ReactComponent as Logo } from "./svg/ryan-chase-logo.svg";

const HeaderWrapper = styled.header`
    background-color: ${props => props.theme.white};
    box-shadow: 0 0.0625rem 0.0625rem rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100vw;
    z-index: 10;
`;
const HeaderContent = styled.div`
    display: flex;
    width: 65rem;
    padding: 0 0.625rem 0 1.25rem;
`;
const HeaderLogo = styled.a`
    align-items: center;
    display: flex;
    color: ${props => props.theme.mineShaft};
    font-size: 1.25rem;
    font-weight: 700;
    padding: ${props => props.theme.spacingReg} 0;
    text-decoration: none;
    text-transform: lowercase;

    & > svg {
        margin-right: ${props => props.theme.spacingMed};
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContent>
                <HeaderLogo href="/">
                    <Logo />
                    <div>Ryan Chase</div>
                </HeaderLogo>
                <Nav />
            </HeaderContent>
        </HeaderWrapper>
    );
};

export default Header;

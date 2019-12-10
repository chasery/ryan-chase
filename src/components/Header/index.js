import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

import Nav from "./Nav";
import { ReactComponent as Logo } from "../../assets/svg/header/ryan-chase-logo.svg";

const HeaderWrapper = styled.header`
    background-color: ${props => props.theme.white};
    box-shadow: 0 0.0625rem 0.0625rem rgba(0, 0, 0, 0.1);
    display: flex;
    flex-basis: 3.25rem;
    justify-content: center;
    left: 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
`;
const HeaderContent = styled.div`
    display: flex;
    padding: 0 0.625rem 0 1.25rem;

    @media (max-width: ${props => props.theme.breakSm}) {
        padding: 0 0 0 1.25rem;
        width: ${props => props.theme.contentSm};
    }
    @media (min-width: ${props =>
            props.theme.breakSm}) and (max-width: ${props =>
            props.theme.breakLrg}) {
        width: ${props => props.theme.contentMed};
    }
    @media (min-width: ${props => props.theme.breakLrg}) {
        width: ${props => props.theme.contentLrg};
    }
`;
const HeaderLogo = styled(Link)`
    align-items: center;
    display: flex;
    color: ${props => props.theme.mineShaft};
    font-size: 1.25rem;
    font-weight: 700;
    padding: ${props => props.theme.spacingSm} 0;
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
                <HeaderLogo to="Hero" smooth={true} duration={500}>
                    <Logo />
                    <div>Ryan Chase</div>
                </HeaderLogo>
                <Nav />
            </HeaderContent>
        </HeaderWrapper>
    );
};

export default Header;

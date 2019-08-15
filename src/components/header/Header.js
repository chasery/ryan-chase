import React from "react";
import styled from "styled-components";

import Nav from "./Nav";
import { ReactComponent as Logo } from "./svg/ryan-chase-logo.svg";

const HeaderWrapper = styled.header`
    background-color: ${props => props.theme.white};
    box-shadow: 0 0.0625rem 0.0625rem rgba(0, 0, 0, 0.1);
    display: flex;
    left: 0;
    justify-content: center;
    position: fixed;
    width: 100vw;
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
const HeaderLogo = styled.a`
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

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = { navIsOpen: false };
    }

    toggleMobileNav = () => {
        this.setState(prevState => ({
            navIsOpen: !prevState.navIsOpen
        }));
    };

    render() {
        return (
            <HeaderWrapper>
                <HeaderContent>
                    <HeaderLogo href="/">
                        <Logo />
                        <div>Ryan Chase</div>
                    </HeaderLogo>
                    <Nav
                        navIsOpen={this.state.navIsOpen}
                        toggleMobileNav={this.toggleMobileNav}
                    />
                </HeaderContent>
            </HeaderWrapper>
        );
    }
}

export default Header;

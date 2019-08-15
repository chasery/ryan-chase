import React from "react";
import styled from "styled-components";

import NavControl from "./NavControl";
import { ReactComponent as Logo } from "./svg/ryan-chase-logo.svg";
import { ReactComponent as MenuIcon } from "./svg/menu.svg";
import { ReactComponent as CloseIcon } from "./svg/close.svg";
import { ReactComponent as EmailIcon } from "./svg/email.svg";
import { ReactComponent as GithubIcon } from "./svg/github.svg";
import { ReactComponent as LinkedInIcon } from "./svg/linkedin.svg";

const NavWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    position: relative;
    z-index: 20;
`;
const NavContent = styled.nav`
    display: flex;

    @media (max-width: ${props => props.theme.breakSm}) {
        background-color: ${props => props.theme.white};
        flex-direction: column;
        height: 100vh;
        opacity: ${props => (props.navIsOpen ? "1" : "0")};
        position: absolute;
        right: 0;
        top: 0;
        width: 100vw;

        -webkit-transition: opacity 0.5s;
        -moz-transition: opacity 0.5s;
        -o-transition: opacity 0.5s;
        -ms-transition: opacity 0.5s;
        transition: opacity 0.5s;
    }
`;
const NavHeader = styled.div`
    align-items: center;
    box-shadow: 0 0.0625rem 0.0625rem rgba(0, 0, 0, 0.1);
    display: none;
    flex-basis: 3.25rem;
    margin-bottom: ${props => props.theme.spacingSm};
    padding-left: 1.25rem;

    & > h2 {
        flex-grow: 1;
        font-size: 1.25rem;
        margin: 0;
        text-transform: lowercase;
    }
    & > svg {
        margin-right: 1.25rem;
    }

    @media (max-width: ${props => props.theme.breakSm}) {
        display: flex;
    }
`;
const NavSubHeader = styled.h3`
    align-items: center;
    display: none;
    flex-basis: 3.25rem;
    font-size: 1.25rem;
    margin: 0;
    padding-left: 1.25rem;
    text-transform: lowercase;

    @media (max-width: ${props => props.theme.breakSm}) {
        display: flex;
    }
`;
const NavGroup = styled.div`
    align-items: center;
    display: flex;

    & + h3 + div {
        border-left: 0.0625rem solid ${props => props.theme.mineShaft};
        margin: 1rem 0;
        padding-left: 0.625rem;
    }

    @media (max-width: ${props => props.theme.breakSm}) {
        align-items: stretch;
        flex-direction: column;
        margin-bottom: ${props => props.theme.spacingSm};

        & + h3 + div {
            border-left: none;
            flex-direction: column-reverse;
            margin: 0;
            padding-left: 0;
        }
    }
`;

const Nav = props => {
    return (
        <NavWrapper>
            <NavControl type="menu" onClick={props.toggleMobileNav}>
                <MenuIcon />
            </NavControl>
            <NavContent navIsOpen={props.navIsOpen}>
                <NavHeader>
                    <Logo />
                    <h2>Menu</h2>
                    <NavControl type="menu" onClick={props.toggleMobileNav}>
                        <CloseIcon />
                    </NavControl>
                </NavHeader>
                <NavGroup>
                    <NavControl type="text">About</NavControl>
                    <NavControl type="text">Skills</NavControl>
                    <NavControl type="text">Portfolio</NavControl>
                </NavGroup>
                <NavSubHeader>Contact</NavSubHeader>
                <NavGroup>
                    <NavControl
                        type="icon"
                        as="a"
                        href="https://github.com/chasery/"
                        target="_blank"
                    >
                        <GithubIcon />
                        <span>Github</span>
                    </NavControl>
                    <NavControl
                        type="icon"
                        as="a"
                        href="https://www.linkedin.com/in/chasery"
                        target="_blank"
                    >
                        <LinkedInIcon />
                        <span>LinkedIn</span>
                    </NavControl>
                    <NavControl type="icon" as="a" href="mailto:test@test.com">
                        <EmailIcon />
                        <span>E-mail</span>
                    </NavControl>
                </NavGroup>
            </NavContent>
        </NavWrapper>
    );
};

export default Nav;

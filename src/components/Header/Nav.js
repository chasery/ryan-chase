import React from "react";
import styled from "styled-components";

import { ReactComponent as MenuIcon } from "./svg/menu.svg";
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
    @media (max-width: ${props => props.theme.breakSm}) {
        background-color: ${props => props.theme.white}
        height: ${props => (props.navIsOpen ? "100vh" : "0")};
        position: absolute;
        right: 0;
        top: 0;
        width: ${props => (props.navIsOpen ? "100vw" : "0")};
        visibility: ${props => (props.navIsOpen ? "visible" : "hidden")};
    }
`;
const NavControls = styled.div`
    align-items: center;
    display: flex;

    & + div {
        border-left: 0.0625rem solid ${props => props.theme.mineShaft};
        margin: 1rem 0;
        padding-left: 0.625rem;
    }
`;
const NavLink = styled.button`
    align-self: stretch;
    background: transparent;
    border: none;
    border-top: 0.25rem solid transparent;
    color: ${props => props.theme.mineShaft};
    font-weight: 700;
    line-height: 0;
    padding: 0 1.25rem 0.25rem;
    text-transform: lowercase;

    &:hover {
        border-top: 0.25rem solid ${props => props.theme.turquoise};
        color: ${props => props.theme.turquoise};
    }
`;
const IconLink = styled(NavLink)`
    border-top: none;
    display: flex;
    padding: 0.25rem 0.625rem;
    text-decoration: none;

    svg {
        align-self: center;

        g {
            fill: ${props => props.theme.mineShaft};
        }
    }

    &:hover {
        border-top: none;

        g {
            fill: ${props => props.theme.turquoise};
        }
    }
`;
const MenuButton = styled(IconLink)`
    display: none;

    @media (max-width: ${props => props.theme.breakSm}) {
        display: block;
    }
`;

const Nav = props => {
    console.log(props.navIsOpen);
    return (
        <NavWrapper>
            <MenuButton onClick={props.toggleMobileNav}>
                <MenuIcon />
            </MenuButton>
            <NavContent navIsOpen={props.navIsOpen}>
                <NavControls>
                    <NavLink>About</NavLink>
                    <NavLink>Skills</NavLink>
                    <NavLink>Portfolio</NavLink>
                </NavControls>
                <NavControls>
                    <IconLink
                        as="a"
                        href="https://github.com/chasery/"
                        target="_blank"
                    >
                        <GithubIcon />
                    </IconLink>
                    <IconLink
                        as="a"
                        href="https://www.linkedin.com/in/chasery"
                        target="_blank"
                    >
                        <LinkedInIcon />
                    </IconLink>
                    <IconLink as="a" href="mailto:test@test.com">
                        <EmailIcon />
                    </IconLink>
                </NavControls>
            </NavContent>
        </NavWrapper>
    );
};

export default Nav;

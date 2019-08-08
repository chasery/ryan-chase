import React from "react";
import styled from "styled-components";

import { ReactComponent as EmailIcon } from "./svg/email.svg";
import { ReactComponent as GithubIcon } from "./svg/github.svg";
import { ReactComponent as LinkedInIcon } from "./svg/linkedin.svg";

const NavWrapper = styled.nav`
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
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

    svg g {
        fill: ${props => props.theme.mineShaft};
    }

    &:hover {
        border-top: 0.25rem solid ${props => props.theme.turquoise};
        color: ${props => props.theme.turquoise};

        svg g {
            fill: ${props => props.theme.turquoise};
        }
    }
`;
const IconLink = styled(NavLink)`
    border-top: none;
    display: flex;
    padding: 0.25rem 0.625rem;
    text-decoration: none;

    svg {
        align-self: center;
    }

    &:hover {
        border-top: none;
    }
`;

const Nav = () => {
    return (
        <NavWrapper>
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
        </NavWrapper>
    );
};

export default Nav;

import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const IconLink = styled.a`
    align-items: center;
    color: ${props => props.theme.mineShaft};
    display: flex;
    font-weight: 700;
    outline: none;
    text-transform: lowercase;
    text-decoration: none;

    div {
        display: flex;
        flex-basis: 1.25rem;
        justify-content: center;
    }
    svg {
        align-self: center;

        g {
            fill: ${props => props.theme.mineShaft};
        }
    }
    &:hover,
    &:focus {
        color: ${props => props.theme.turquoise};

        svg g {
            fill: ${props => props.theme.turquoise};
        }
    }

    // Responsive
    @media (max-width: ${props => props.theme.breakSm}) {
        align-items: center;
        flex-basis: 3.25rem;
        padding: 0 1.25rem;

        span {
            align-self: center;
            margin-left: ${props => props.theme.spacingSm};
        }
    }
    @media (min-width: ${props => props.theme.breakSm}) {
        align-self: stretch;
        padding: 0.25rem 0.625rem;

        span {
            display: none;
        }
    }
`;
const MenuControl = styled(IconLink)`
    display: none;
    flex-basis: 3.25rem;
    justify-content: center;
    min-width: 3.25rem;

    // Responsive
    @media (max-width: ${props => props.theme.breakSm}) {
        border: none;
        display: flex;
        padding: 0;

        &:hover,
        &:focus {
            border: none;
        }
    }
    @media (min-width: ${props => props.theme.breakSm}) {
        padding: 0;
    }
`;
const AppLink = styled(Link)`
    color: ${props => props.theme.mineShaft};
    display: flex;
    align-items: center;
    font-weight: 700;
    outline: none;
    text-transform: lowercase;

    &:hover,
    &:focus,
    &[class*="active"] {
        color: ${props => props.theme.turquoise};
    }

    // Responsive
    @media (max-width: ${props => props.theme.breakSm}) {
        border-left: 0.25rem solid transparent;
        flex-basis: 3.25rem;
        padding: 0 1rem;
        text-align: left;

        &[class*="active"] {
            border-left: 0.25rem solid ${props => props.theme.turquoise};
        }
    }
    @media (min-width: ${props => props.theme.breakSm}) {
        align-self: stretch;
        border-top: 0.25rem solid transparent;
        padding: 0 1.25rem 0.25rem;

        &[class*="active"] {
            border-top: 0.25rem solid ${props => props.theme.turquoise};
        }
    }
`;

const NavControl = props => {
    const icon = "icon";
    const menu = "menu";

    switch (props.type) {
        case icon:
            return (
                <IconLink href={props.href} target={props.target}>
                    {props.children}
                </IconLink>
            );
        case menu:
            return (
                <MenuControl onClick={props.onClick}>
                    {props.children}
                </MenuControl>
            );
        default:
            return (
                <AppLink
                    activeClass="active"
                    to={props.to}
                    spy={true}
                    smooth={true}
                    offset={-52}
                    duration={500}
                    onClick={props.onClick}
                >
                    {props.children}
                </AppLink>
            );
    }
};

export default NavControl;

import React from "react";
import styled from "styled-components";

const TextLink = styled.button`
    background: transparent;
    border: none;
    color: ${props => props.theme.mineShaft};
    font-weight: 700;
    line-height: 0;
    outline: none;
    padding: 0 1.25rem 0.25rem;
    text-transform: lowercase;

    &:hover,
    &:focus {
        color: ${props => props.theme.turquoise};
    }
    @media (max-width: ${props => props.theme.breakSm}) {
        border-left: 0.25rem solid transparent;
        flex-basis: 3.25rem;
        padding: 0 1rem;
        text-align: left;

        &:hover,
        &:focus {
            border-left: 0.25rem solid ${props => props.theme.turquoise};
        }
    }
    @media (min-width: ${props => props.theme.breakSm}) {
        align-self: stretch;
        border-top: 0.25rem solid transparent;

        &:hover,
        &:focus {
            border-top: 0.25rem solid ${props => props.theme.turquoise};
        }
    }
`;
const IconLink = styled(TextLink)`
    border: none;
    display: flex;
    padding: 0.25rem 0.625rem;
    text-decoration: none;

    span {
        display: none;
    }
    svg {
        align-self: center;

        g {
            fill: ${props => props.theme.mineShaft};
        }
    }
    &:hover,
    &:focus {
        border: none;

        svg g {
            fill: ${props => props.theme.turquoise};
        }
    }
    @media (max-width: ${props => props.theme.breakSm}) {
        border: none;
        align-items: center;
        padding: 0 1.25rem;

        span {
            display: block;
            margin-left: ${props => props.theme.spacingSm};
        }
    }
`;
const MenuControl = styled(IconLink)`
    border: none;
    flex-basis: 3.25rem;
    justify-content: center;
    padding: 0;
    visibility: hidden;
    min-width: 3.25rem;

    &:hover,
    &:focus {
        border: none;
    }
    @media (max-width: ${props => props.theme.breakSm}) {
        padding: 0;
        visibility: visible;
    }
`;

const NavControl = props => {
    const icon = "icon";
    const menu = "menu";

    switch (props.type) {
        case icon:
            return (
                <IconLink as={props.as} href={props.href} target={props.target}>
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
            return <TextLink>{props.children}</TextLink>;
    }
};

export default NavControl;

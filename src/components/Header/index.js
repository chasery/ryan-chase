import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.white};
`;
const HeaderContent = styled.div`
    display: flex;
    width: 67.5rem;
    background-color: ${props => props.theme.white};
`;
const HeaderLogo = styled.div``;
const HeaderNav = styled.nav``;
const HeaderNavControls = styled.div``;
const HeaderNavLinks = styled.div``;

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContent>
                <HeaderLogo>
                    <svg />
                    <div>Ryan Chase</div>
                </HeaderLogo>
                <HeaderNav>
                    <HeaderNavControls>
                        <button>About</button>
                        <button>Skills</button>
                        <button>Portfolio</button>
                    </HeaderNavControls>
                    <HeaderNavLinks>
                        <a href="" target="_blank">
                            <svg />
                        </a>
                        <a href="" target="_blank">
                            <svg />
                        </a>
                        <a href="" target="_blank">
                            <svg />
                        </a>
                    </HeaderNavLinks>
                </HeaderNav>
            </HeaderContent>
        </HeaderWrapper>
    );
};

export default Header;

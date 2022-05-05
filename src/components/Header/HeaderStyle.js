import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { colors, breakpoints } from "../../lib/style/theme";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-hamburger.svg";

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px;
  z-index: 2;

  ${(props) =>
    props.isSecondary &&
    `
   position: initial;
    background-color: ${colors.textPrimary};`}

  @media (${breakpoints.destkop}) {
    padding: 32px 0;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${breakpoints.destkop}) {
    width: 960px;
    margin: 0 auto;
    padding: 32px 0;
  }

  @media (${breakpoints.destkopLarge}) {
    width: 1260px;
  }
`;

export const LogoLink = styled(Link)``;

export const LogoImg = styled.img`
  width: 140px;
`;

export const Hamburger = styled(HamburgerIcon)`
  width: 30px;
  height: auto;
  cursor: pointer;
  z-index: 1;

  @media (${breakpoints.destkop}) {
    display: none;
  }

  path {
    fill: ${colors.bgPrimary};
  }
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #bf3939e1;
  height: 100vh;
  width: 100%;
  text-align: center;
  padding: 60px 20px 20px 20px;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);

  @media (${breakpoints.tablet}) {
    width: 25%;
    justify-content: flex-start;
    text-align: left;
  }
`;

export const MenuLinks = styled.a`
  font-size: 20px;
  text-transform: uppercase;
  padding: 20px 0;
  font-weight: bold;
  letter-spacing: 5px;
  color: ${colors.secondary};
`;

export const HeaderNav = styled.nav`
  display: none;

  @media (${breakpoints.destkop}) {
    display: block;
  }
`;

export const HeaderNavLink = styled(NavLink)`
  color: ${colors.secondary};
  letter-spacing: 1px;
  margin-right: 48px;
  transition: text-shadow 0.3s ease-out;
  position: relative;

  &:hover {
    text-shadow: 0.7px 0 0 ${colors.secondary};
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 2px;
    width: 100%;
    background: ${colors.bgPrimary};
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.3s linear;
  }

  &:hover::after {
    visibility: visible;
    opacity: 1;
  }

  &_active::after {
    visibility: visible;
    opacity: 1;
  }
`;

export const ButtonLink = styled(Link)`
  margin-right: 24px;
  display: inline-block;

  &:last-child {
    margin-right: 0;
  }
`;

// ${(props) =>
//   props.isSecondary &&
//   `
//  position: initial;
//   background-color: ${colors.textPrimary};`}

import styled from "styled-components";
import { NavLink } from "react-router-dom"; //
import { colors, breakpoints } from "../../lib/style/theme";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.bgMenuPrimary};
  height: 100vh;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  z-index: 9;
`;

export const MenuLinks = styled(NavLink)`
  font-size: 20px;
  text-transform: uppercase;
  padding: 20px 0;
  font-weight: 500;
  letter-spacing: 2px;
  color: ${colors.secondary};
  transition: all 0.3s ease-in-out;

  @media (${breakpoints.tabletSmall}) {
    font-size: 24px;
  }

  @media (${breakpoints.tablet}) {
    font-size: 28px;
  }

  &:hover {
    background: ${colors.bgMenuHover};
    font-weight: 700;
  }
`;

export const Logout = styled.span`
  font-size: 20px;
  text-transform: uppercase;
  padding: 20px 0;
  font-weight: 500;
  letter-spacing: 2px;
  color: ${colors.secondary};
  transition: all 0.3s ease-in-out;

  @media (${breakpoints.tabletSmall}) {
    font-size: 24px;
  }

  @media (${breakpoints.tablet}) {
    font-size: 28px;
  }

  &:hover {
    background: ${colors.bgMenuHover};
    font-weight: 700;
  }
`;

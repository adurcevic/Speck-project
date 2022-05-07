import styled from "styled-components";
import { NavLink } from "react-router-dom"; //
import { colors } from "../../lib/style/theme";

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
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  z-index: 9;
`;

export const MenuLinks = styled(NavLink)`
  font-size: 24px;
  text-transform: uppercase;
  padding: 20px 0;
  font-weight: bold;
  letter-spacing: 5px;
  color: ${colors.secondary};
`;

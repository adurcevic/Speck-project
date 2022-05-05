import React from "react";
import { StyledMenu, MenuLinks } from "./HamburgerMenuStyle";

export const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <MenuLinks to="/courses">Courses</MenuLinks>
      <MenuLinks to="/">Sign In</MenuLinks>
      <MenuLinks to="/">Register</MenuLinks>
    </StyledMenu>
  );
};

export default Menu;

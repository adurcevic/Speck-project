import React from "react";
import { StyledMenu, MenuLinks } from "./HamburgerMenuStyle";

export const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <MenuLinks to="/courses">Courses</MenuLinks>
      <MenuLinks to="/sign-in">Sign In</MenuLinks>
      <MenuLinks to="/register">Register</MenuLinks>
    </StyledMenu>
  );
};

export default Menu;

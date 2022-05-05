import React from "react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";
import LogoImg from "../../assets/images/logo.svg";
import { Button } from "../../lib/style/generalStyles";

import {
  Header as HeaderWrapper,
  HeaderInner,
  LogoLink,
  LogoImg as LogoElement,
  Hamburger,
  HeaderNav,
  HeaderNavLink,
  ButtonLink,
  StyledMenu,
  MenuLinks,
} from "./HeaderStyle";

const Header = ({ isSecondary }) => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderWrapper isSecondary={isSecondary}>
      <HeaderInner>
        <LogoLink to="/">
          <LogoElement src={LogoImg} alt="Academy logo" />
        </LogoLink>
        <Hamburger open={open} onClick={() => setOpen(!open)} />
        <StyledMenu open={open} setOpen={setOpen}>
          <MenuLinks href="courses">Courses</MenuLinks>
          <MenuLinks href="/">Sign In</MenuLinks>
          <MenuLinks href="/">Register</MenuLinks>
        </StyledMenu>
        <HeaderNav>
          <HeaderNavLink to="/courses">Courses</HeaderNavLink>
          <ButtonLink to="/">
            <Button isNav={true}>Sign In</Button>
          </ButtonLink>
          <ButtonLink to="/">
            <Button isNav={true} isSecondary={true}>
              Register
            </Button>
          </ButtonLink>
        </HeaderNav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;

import React from "react";
import { useState } from "react";
import LogoImg from "../../assets/images/logo.svg";
import { Button } from "../../lib/style/generalStyles";
import Hamburger from "../Hamburger/Hamburger";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

import {
  Header as HeaderWrapper,
  HeaderInner,
  LogoLink,
  LogoImg as LogoElement,
  HeaderNav,
  HeaderNavLink,
  ButtonLink,
} from "./HeaderStyle";

const Header = ({ isSecondary }) => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderWrapper isSecondary={isSecondary}>
      <HeaderInner>
        <LogoLink to="/" open={open} setOpen={setOpen}>
          <LogoElement src={LogoImg} alt="Academy logo" />
        </LogoLink>
        <Hamburger open={open} setOpen={setOpen} />
        <HamburgerMenu open={open} setOpen={setOpen} />
        <HeaderNav>
          <HeaderNavLink to="/courses">Courses</HeaderNavLink>
          <ButtonLink to="/sign-in">
            <Button isNav={true}>Sign In</Button>
          </ButtonLink>
          <ButtonLink to="/register">
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

import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";
import LogoImg from "../../assets/images/logo.svg";
import Button from "../Button/Button";
import {
  Header as HeaderWrapper,
  HeaderInner,
  LogoLink,
  LogoImg as LogoElement,
  Hamburger,
  HeaderNav,
  HeaderNavLink,
  ButtonLink,
} from "./HeaderStyle";

const Header = ({ isSecondary }) => {
  return (
    <HeaderWrapper isSecondary={isSecondary}>
      <HeaderInner>
        <LogoLink to="/">
          <LogoElement src={LogoImg} alt="Academy logo" />
        </LogoLink>
        <Hamburger />
        <HeaderNav>
          <HeaderNavLink to="/courses">Courses</HeaderNavLink>
          <ButtonLink to="/">
            <Button modifiers={["nav"]}>Sign In</Button>
          </ButtonLink>
          <ButtonLink to="/">
            <Button modifiers={["nav", "secondary"]}>Register</Button>
          </ButtonLink>
        </HeaderNav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;

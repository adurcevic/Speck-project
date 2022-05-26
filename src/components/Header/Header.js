import React from "react";
import { useState, useContext } from "react";
import LogoImg from "../../assets/images/logo.svg";
import { Button } from "../../lib/style/generalStyles";
import Hamburger from "../Hamburger/Hamburger";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { AuthContext } from "../../context/AuthContext";

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
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  return (
    <HeaderWrapper isSecondary={isSecondary}>
      <HeaderInner>
        <LogoLink to="/" open={open}>
          <LogoElement src={LogoImg} alt="Academy logo" />
        </LogoLink>
        <Hamburger open={open} setOpen={setOpen} />
        <HamburgerMenu open={open} setOpen={setOpen} />
        <HeaderNav>
          <HeaderNavLink to="/courses">Courses</HeaderNavLink>
          {isLoggedIn && <HeaderNavLink to="/profile">Profile</HeaderNavLink>}
          {!isLoggedIn && (
            <>
              <ButtonLink to="/sign-in">
                <Button isNav={true}>Sign In</Button>
              </ButtonLink>
              <ButtonLink to="/register">
                <Button isNav={true} isSecondary={true}>
                  Register
                </Button>
              </ButtonLink>
            </>
          )}
          {isLoggedIn && (
            <Button onClick={handleLogout} isNav={true} isSecondary={true}>
              Logout
            </Button>
          )}
        </HeaderNav>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;

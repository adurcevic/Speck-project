import React from "react";
import { useContext } from "react";
import { StyledMenu, MenuLinks, Logout } from "./HamburgerMenuStyle";
import { AuthContext } from "../../context/AuthContext";

export const Menu = ({ open }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  };

  return (
    <StyledMenu open={open}>
      <MenuLinks to="/courses">Courses</MenuLinks>
      {isLoggedIn && <MenuLinks to="/profile">Profile</MenuLinks>}
      {!isLoggedIn && (
        <>
          <MenuLinks to="/sign-in">Sign In</MenuLinks>
          <MenuLinks to="/register">Register</MenuLinks>
        </>
      )}
      {isLoggedIn && <Logout onClick={handleLogout}>Logout</Logout>}
    </StyledMenu>
  );
};

export default Menu;

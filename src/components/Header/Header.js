import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";
import LogoImg from "../../assets/images/logo.svg";
import Button from "../Button/Button";

const Header = ({ modifiers }) => {
  const modifierClasses = {
    secondary: "Header_secondary",
  };

  let headerClass = "Header";

  if (modifiers) {
    modifiers.map((modifier) => {
      headerClass += " " + modifierClasses[modifier];
    });
  }

  return (
    <header className={headerClass}>
      <div className="Header-Inner">
        <Link to="/" className="Header-LogoLink">
          <img className="Header-Logo" alt="Academy logo" src={LogoImg} />
        </Link>
        <svg
          className="Header-Hamburger"
          width="448"
          height="392"
          viewBox="0 0 448 392"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 72H432C440.837 72 448 64.837 448 56V16C448 7.163 440.837 0 432 0H16C7.163 0 0 7.163 0 16V56C0 64.837 7.163 72 16 72ZM16 232H432C440.837 232 448 224.837 448 216V176C448 167.163 440.837 160 432 160H16C7.163 160 0 167.163 0 176V216C0 224.837 7.163 232 16 232ZM16 392H432C440.837 392 448 384.837 448 376V336C448 327.163 440.837 320 432 320H16C7.163 320 0 327.163 0 336V376C0 384.837 7.163 392 16 392Z"
            fill="black"
          />
        </svg>
        <nav className="Header-Nav">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? "Header-NavLink" + " " + "Header-NavLink_active"
                : "Header-NavLink"
            }
            to="/courses"
          >
            Courses
          </NavLink>
          <div className="Header-Nav-Button">
            <Button modifiers={["nav"]}>Sign In</Button>
          </div>
          <div className="Header-Nav-Button">
            <Button modifiers={["nav", "secondary"]}>Register</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { colors, breakpoints } from "../../lib/style/theme";

export const Header = styled.header`
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px;
  z-index: 2;

  ${props => props.isSecondary && `
   position: initial;
    background-color: ${colors.textPrimary};`}

@media (${breakpoints.destkop}) {
        padding: 32px 0;
    }
`;

export const HeaderInner = styled.div`
 
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (${breakpoints.destkop}) {
      width: 960px;
      margin: 0 auto;
      padding: 32px 0;
    }

    @media (${breakpoints.destkopLarge}) {
      width: 1260px;
    }
`;

.Header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px;
  z-index: 2;

  &_secondary {
    position: initial;
    background-color: $colorTextPrimary;
  }

  &-Hamburger {
    width: 30px;
    height: auto;

    @media (#{$destkop}) {
      display: none;
    }

    path {
      fill: #ffffff;
    }
  }

  &-Inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (#{$destkop}) {
      width: 960px;
      margin: 0 auto;
      padding: 32px 0;
    }

    @media (#{$destkopLarge}) {
      width: 1260px;
    }
  }

  &-Nav {
    display: none;

    @media (#{$destkop}) {
      display: block;
    }
  }

  &-Logo {
    width: 140px;
  }

  &-NavLink {
    color: $colorSecondary;
    letter-spacing: 1px;
    margin-right: 48px;
    transition: text-shadow 0.3s ease-out;
    position: relative;

    &:hover {
      text-shadow: 0.7px 0 0 $colorSecondary;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -4px;
      height: 2px;
      width: 100%;
      background: $colorSecondary;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s, opacity 0.3s linear;
    }

    &:hover::after {
      visibility: visible;
      opacity: 1;
    }

    &_active::after {
      visibility: visible;
      opacity: 1;
    }
  }

  &-Nav-Button {
    margin-right: 24px;
    display: inline-block;
  }

  &-Nav-Button:last-child {
    margin-right: 0;
  }
}

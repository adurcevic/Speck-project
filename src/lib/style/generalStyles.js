import styled from "styled-components";
import { breakpoints, colors } from "./theme";

// GRID STYLE

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 48px;

  @media (${breakpoints.tabletSmall}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }

  @media (${breakpoints.destkop}) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 48px;
  }

  @media (${breakpoints.destkopLarge}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

// MAIN STYLE

export const Main = styled.main`
  width: 100%;
  overflow: hidden;
`;

// BUTTONS STYLE

export const Button = styled.button`
  border: none;
  height: 48px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 220px;
  background: ${colors.bgPrimary};
  color: ${colors.primary};
  border-radius: 30px;
  font-weight: 500;
  display: inline-flex;
  text-transform: uppercase;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 1px 3px ${colors.black};
  }

  ${(props) =>
    props.isNav &&
    `
    width: 150px;
   
    &:hover {
      transition: all 0.3s ease-in-out;
      filter: drop-shadow(0 3px 3px ${colors.black});
      }`}

  ${(props) =>
    props.isSecondary &&
    `
    background: ${colors.primary};
    color: ${colors.secondary};
  `}

  ${(props) =>
    props.isOutline &&
    `
    border: 1px solid ${colors.primary};
  `}

  ${(props) => props.isHeading && `width: 200px;`}
`;

// SPINNER WRAPPER

export const SpinnerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

// NO COURSES FOUND

export const NoCoursesWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 150%;
  transform: translate(-50%, -50%);
`;

export const NoCourses = styled.p`
  color: ${colors.textPrimary};
  font-size: 18px;
  font-weight: 700;
`;

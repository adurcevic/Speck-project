import styled from "styled-components";
import { breakpoints, colors, fonts } from "./theme";
import {
  Form as FormFormik,
  Field as FieldFormik,
  ErrorMessage as ErrorMessageFormik,
} from "formik";
import { css } from "styled-components";

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

  /* ${(props) =>
    props.isProfile &&
    `display: ${({ active }) => (!active ? "none" : "block")};`} */

  ${(props) => props.isHeading && `width: 200px;`}
  
  ${(props) =>
    props.isForm &&
    `
  display: block;
  margin: 0 auto;
  width: 220px;`}
`;

// FORM STYLES

export const Form = styled(FormFormik)`
  @media (${breakpoints.tabletSmall}) {
    width: 400px;

    ${(props) =>
      props.isCentered !== false &&
      `
            margin: 0 auto;
        `}
  }
`;

export const FormRow = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FieldStyle = css`
  border: 1px solid ${colors.textSecondary};
  border-radius: 6px;
  width: 100%;
  line-height: 50px;
  height: 50px;
  padding: 0 12px;
  outline: none;
  font-size: 14px;
  font-family: ${fonts.primary};

  &:focus {
    border-color: ${colors.textPrimary};
  }

  @media (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const Field = styled(FieldFormik)`
  ${FieldStyle}
`;

export const Select = styled.select`
  ${FieldStyle}
`;

export const Option = styled.option``;

export const ErrorMessage = styled(ErrorMessageFormik)`
  font-size: 14px;
  color: ${colors.primary};
  padding-top: 8px;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  color: ${colors.textPrimary};
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Fieldset = styled.fieldset`
  border: none;
`;

// SPINNER WRAPPER

export const SpinnerWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

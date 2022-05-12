import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const PasswordContainer = styled.div`
  padding: 25px;
  border-radius: 5px;
  background-color: ${colors.bgTertiary};
  align-self: start;

  @media (${breakpoints.tabletSmall}) {
    justify-self: center;
  }
  @media (${breakpoints.tablet}) {
    justify-self: start;
  }
`;

export const PasswordWrapper = styled.div`
  @media (${breakpoints.tabletSmall}) {
    width: 350px;
  }

  @media (${breakpoints.tablet}) {
    width: 300px;
  }
`;

export const PasswordTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.black};
  margin-bottom: 35px;
`;
export const PasswordText = styled.p`
  font-size: 16px;
  color: ${colors.textPrimary};
  display: ${({ active }) => (!active ? "block" : "none")};
`;

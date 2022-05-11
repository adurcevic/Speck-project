import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const PasswordContainer = styled.div`
  padding: 25px;
  border-radius: 5px;
  background-color: #e9ecef;
  align-self: start;
`;

export const PasswordWrapper = styled.div`
  min-width: 300px;

  @media (${breakpoints.tabletSmall}) {
    min-width: 350px;
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

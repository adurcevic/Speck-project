import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const Search = styled.div``;

export const SearchInputs = styled.div`
  padding: 0 15px;
  margin-bottom: 40px;

  @media (${breakpoints.tabletMedium}) {
    max-width: 400px;
    padding: 0;
    margin: 0 auto 40px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SearchInput = styled.input`
  border: 1px solid ${colors.textSecondary};
  border-radius: 6px;
  line-height: 40px;
  outline: none;
  font-size: 14px;

  &:focus {
    border: ${colors.textPrimary};
  }

  @media (${breakpoints.destkop}) {
    font-size: 16px;
  }
`;

export const SearchIcon = styled.div`
  height: 60px;
  width: 50px;
  background-color: ${colors.bgPrimary};
  display: grid;
  place-items: center;

  input:focus {
    outline: none;
  }
`;
export const Data = styled.div``;

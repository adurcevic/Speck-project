import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

export const Search = styled.div`
  @media (${breakpoints.tabletMedium}) {
    width: 400px;
  }
`;

export const SearchInputs = styled.div`
  position: relative;
  max-width: 350px;

  @media (${breakpoints.tabletMedium}) {
    max-width: 400px;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  padding-left: 5px;
  border: 1px solid ${colors.textSecondary};
  border-radius: 16px;
  line-height: 40px;
  outline: none;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px;

  &:focus {
    border: ${colors.textPrimary};
  }

  @media (${breakpoints.destkop}) {
    font-size: 16px;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
  width: 30px;
`;

export const Icon = styled(SearchIcon)`
  font-size: 30px !important;
  color: ${colors.textPrimary};
`;

export const ClearIcon = styled(CloseIcon)`
  font-size: 30px !important;
  color: ${colors.textPrimary};
  cursor: pointer;
`;

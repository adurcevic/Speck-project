import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

export const Search = styled.div`
  /* padding: 0 15px; */
  /* margin-bottom: 40px; */
  @media (${breakpoints.tabletMedium}) {
    max-width: 400px;
    padding: 0;
    /* margin: 0 auto; */
  }
`;

export const SearchInputs = styled.div`
  position: relative;
  width: 290px;
  @media (${breakpoints.tablet}) {
    width: 320px;
  }
  @media (${breakpoints.destkopLarge}) {
    width: 350px;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  padding-left: 5px;
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

export const IconContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
  width: 30px;
`;

export const Icon = styled(SearchIcon)`
  font-size: 30px !important;
  fill: ${colors.textPrimary} !important;
`;

export const ClearIcon = styled(CloseIcon)`
  font-size: 30px !important;
  fill: ${colors.textPrimary} !important;
  cursor: pointer;
`;

export const Courses = styled.div`
  position: absolute;
  z-index: 1;
  margin-top: 5px;
  width: 250px;
  height: 200px;
  background-color: ${colors.bgPrimary};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 3px;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SearchOutput = styled(Link)`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: ${colors.textPrimary};
  &:hover {
    background-color: ${colors.bgSecondary};
  }
`;

export const Output = styled.p`
  margin-left: 10px;
`;

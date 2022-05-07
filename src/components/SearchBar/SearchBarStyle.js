import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

export const Search = styled.div`
  padding: 0 15px;
  margin-bottom: 40px;

  @media (${breakpoints.tabletMedium}) {
    max-width: 400px;
    padding: 0;
    margin: 0 auto 40px auto;
  }
`;

export const SearchInputs = styled.div`
  display: flex;
`;

export const SearchBar = styled.input`
  width: 300px;

  border: 1px solid ${colors.textSecondary};
  border-right: none;
  border-radius: 6px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
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
  width: 50px;
  background-color: ${colors.bgPrimary};
  display: grid;
  place-items: center;
  border: 1px solid ${colors.textSecondary};
  border-left: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;

  &:focus {
    border: ${colors.textPrimary};
  }
`;

export const Icon = styled(SearchIcon)`
  font-size: 30px !important;
`;

export const Courses = styled.div`
  margin-top: 5px;
  width: 250px;
  height: 200px;
  background-color: ${colors.bgPrimary};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  color: ${colors.textSecondary};
`;

export const Output = styled.p`
  margin-left: 10px;
`;

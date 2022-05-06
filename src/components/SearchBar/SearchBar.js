import React from "react";
import {
  Search,
  SearchInputs,
  SearchInput,
  SearchIcon as Icon,
  Data,
} from "./SearchBarStyle";
import SearchIcon from "@material-ui/icons/Search";
import coursesMock from "../../lib/mock/courses";
import { Link } from "react-router-dom";

function SearchBar({ placeholder, data, disabled }) {
  return (
    <Search>
      <SearchInputs>
        <SearchInput
          type="text"
          placeholder={placeholder}
          data={data}
          disabled={disabled}
        />
        <Icon>
          <SearchIcon />
        </Icon>
      </SearchInputs>
      <Data>
        {coursesMock.map((value, key) => {
          return <Link to={`/course/${value.id}`}> {value.title} </Link>;
        })}
      </Data>
    </Search>
  );
}

export default SearchBar;

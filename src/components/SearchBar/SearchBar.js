import React from "react";

import {
  Search,
  SearchInputs,
  SearchBar as Bar,
  IconContainer,
  Icon,
  ClearIcon,
} from "./SearchBarStyle";

function SearchBar({
  placeholder,
  disabled,
  onChange,
  word,
  clearInput,
  showIcon,
}) {
  return (
    <Search>
      <SearchInputs>
        <Bar
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          maxLength={35}
          value={word}
        />
        <IconContainer>
          {{ showIcon } === 0 ? <Icon /> : <ClearIcon onClick={clearInput} />}
        </IconContainer>
      </SearchInputs>
    </Search>
  );
}

export default SearchBar;

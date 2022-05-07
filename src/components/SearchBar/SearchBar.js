import React from "react";
// import { useState } from "react";
import {
  Search,
  SearchInputs,
  SearchBar as Bar,
  IconContainer,
  Icon,
  Courses,
  SearchOutput,
  Output,
} from "./SearchBarStyle";
import coursesMock from "../../lib/mock/courses";

function SearchBar({ placeholder, data, disabled }) {
  // const [focus, setFocus] = useState(false);

  return (
    <Search>
      <SearchInputs>
        <Bar
          // onClick={() => setFocus((focus = true))}
          type="text"
          placeholder={placeholder}
          data={data}
          disabled={disabled}
        />
        <IconContainer>
          <Icon />
        </IconContainer>
      </SearchInputs>
      <Courses>
        {coursesMock.map((value, key) => {
          return (
            <SearchOutput to={`/course/${value.id}`}>
              <Output>{value.title}</Output>
            </SearchOutput>
          );
        })}
      </Courses>
    </Search>
  );
}

export default SearchBar;

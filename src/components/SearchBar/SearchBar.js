import React from "react";
import { useState } from "react";
import {
  Search,
  SearchInputs,
  SearchBar as Bar,
  IconContainer,
  Icon,
  ClearIcon,
  Courses,
  SearchOutput,
  Output,
} from "./SearchBarStyle";
import coursesMock from "../../lib/mock/courses";

function SearchBar({ placeholder, disabled }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleSearch = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = coursesMock.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    searchWord === "" ? setFilteredData([]) : setFilteredData(newFilter);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <Search>
      <SearchInputs>
        <Bar
          type="text"
          placeholder="Search courses..."
          disabled={disabled}
          onChange={handleSearch}
          maxLength={20}
          value={wordEntered}
        />
        <IconContainer>
          {filteredData.length === 0 ? (
            <Icon />
          ) : (
            <ClearIcon onClick={clearInput} />
          )}
        </IconContainer>
      </SearchInputs>

      {filteredData.length != 0 && (
        <Courses>
          {filteredData.map((value, key) => {
            return (
              <SearchOutput to={`/course/${value.id}`}>
                <Output>{value.title}</Output>
              </SearchOutput>
            );
          })}
        </Courses>
      )}
    </Search>
  );
}

export default SearchBar;

import React from "react";
import { useState } from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import {
  Grid,
  NoCourses,
  NoCoursesWrapper,
  ResultNotFound,
} from "../../lib/style/generalStyles";
import SearchBar from "../../components/SearchBar/SearchBar";
import coursesMock from "../../lib/mock/courses";
import CourseCard from "../../components/CourseCard/CourseCard";

const TestSearchBar = () => {
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

  let course;
  if (filteredData.length !== 0) {
    course = filteredData.map((course, index) => (
      <CourseCard
        key={course.id}
        courseId={course.id}
        imgSrc={course.imgSrc}
        imgAlt={course.imgAlt}
        title={course.title}
        subtitle={course.subtitle}
      />
    ));
  } else if (wordEntered.length > 0 && !filteredData.includes({})) {
    course = (
      <NoCoursesWrapper>
        <NoCourses>No results for {wordEntered}</NoCourses>
      </NoCoursesWrapper>
    );
  } else {
    course = coursesMock.map(
      (course, index) =>
        index <= coursesMock.length && (
          <CourseCard
            key={course.id}
            courseId={course.id}
            imgSrc={course.imgSrc}
            imgAlt={course.imgAlt}
            title={course.title}
            subtitle={course.subtitle}
          />
        )
    );
  }

  console.log(filteredData);
  console.log(wordEntered.length);

  return (
    <>
      <Header isSecondary> </Header>
      <Section
        title="Test"
        isMainTitle={true}
        customElement={
          <SearchBar
            placeholder="Search courses..."
            onChange={handleSearch}
            word={wordEntered}
            clearInput={clearInput}
            showIcon={wordEntered.length}
          />
        }
      >
        <Grid>{course}</Grid>
      </Section>
    </>
  );
};

export default TestSearchBar;

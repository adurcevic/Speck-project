import React from "react";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import coursesMock from "../../lib/mock/courses";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
import {
  Grid,
  Main,
  SpinnerWrapper,
  NoCourses,
  NoCoursesWrapper,
} from "../../lib/style/generalStyles";
import { RotatingLines } from "react-loader-spinner";

const Courses = () => {
  const [courses, setCourses] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const n = coursesMock.length;

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);

  const handleSearch = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = courses.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    searchWord === "" ? setFilteredData([]) : setFilteredData(newFilter);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  let course;

  if (!courses) {
    course = [...Array(n)].map((e, i) => (
      <SpinnerWrapper key={i}>
        <RotatingLines width="75" strokeColor="#bf3939" strokeWidth="0.8" />
      </SpinnerWrapper>
    ));
  } else if (courses) {
    course = courses.map(
      (course, index) =>
        index <= courses.length && (
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
        <NoCourses>No results for "{wordEntered}"</NoCourses>
      </NoCoursesWrapper>
    );
  }

  return (
    <>
      <Header isSecondary={[true]} />
      <Main>
        <Section
          title={"All lectures"}
          isHeadingVisible={true}
          isMainTitle={true}
          isSearchBarVisible={true}
          customElement={
            <SearchBar
              disabled={!courses ? true : false}
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
      </Main>
    </>
  );
};

export default Courses;

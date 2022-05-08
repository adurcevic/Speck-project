import React from "react";
import { useEffect, useState } from "react";
import coursesMock from "../../lib/mock/courses";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
import { Grid, Main, SpinnerWrapper } from "../../lib/style/generalStyles";
import { RotatingLines } from "react-loader-spinner";

const Courses = () => {
  const [courses, setCourses] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const n = coursesMock.length;

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Header isSecondary={[true]} />
      <Main>
        <Section
          title={"All lectures"}
          isHeadingVisible={true}
          isMainTitle={true}
          isSearchBarVisible={true}
          disabled={!loaded ? true : false}
          placeholder={"Search courses..."}
        >
          {!loaded ? (
            <Grid>
              {[...Array(n)].map((e, i) => (
                <SpinnerWrapper key={i}>
                  <RotatingLines
                    width="75"
                    strokeColor="#bf3939"
                    strokeWidth="0.8"
                  />
                </SpinnerWrapper>
              ))}
            </Grid>
          ) : (
            courses && (
              <Grid>
                {courses.map(
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
                )}
              </Grid>
            )
          )}
        </Section>
      </Main>
    </>
  );
};

export default Courses;

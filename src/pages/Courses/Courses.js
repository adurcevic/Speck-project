import React from "react";
import { useEffect, useState } from "react";
import coursesMock from "../../lib/mock/courses";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
import { Grid, Main } from "../../lib/style/generalStyles";

const Courses = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);

  return (
    <>
      <Header isSecondary={[true]} />
      <Main>
        <Section Tag={"h1"} title={"All lectures"} isHeadingVisible={true}>
          {courses && (
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
          )}
        </Section>
      </Main>
    </>
  );
};

export default Courses;

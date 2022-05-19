import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import coursesMock from "../../lib/mock/courses";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import {
  Grid,
  Main,
  SpinnerWrapper,
  Button,
} from "../../lib/style/generalStyles";
import { RotatingLines } from "react-loader-spinner";

const Home = () => {
  const [courses, setCourses] = useState(null);
  const n = 4;
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setCourses(coursesMock);
    }, 1000);
  }, []);

  return (
    <>
      <Header />
      <Main>
        <section>
          <Landing />
        </section>
        <Section
          title={"Open new possibilites"}
          actionText={"Learn something new"}
          buttonText={"More Courses"}
          isHeadingVisible={true}
          customElement={
            <Button
              isHeading={true}
              isOutline={true}
              onClick={() => navigate("/courses")}
            >
              More Courses
            </Button>
          }
          // action={() => navigate("/courses")}
        >
          {!courses ? (
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
            <Grid>
              {courses.map(
                (course, index) =>
                  index <= 3 && (
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
        <Section isHeadingVisible={false} isTestimonial={true}>
          <Testimonial />
        </Section>
      </Main>
    </>
  );
};

export default Home;

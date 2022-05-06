import React from "react";
import { useEffect, useState } from "react";
import coursesMock from "../../lib/mock/courses";
import Header from "../../components/Header/Header";
import Landing from "../../components/Landing/Landing";
import Section from "../../components/Section/Section";
import CourseCard from "../../components/CourseCard/CourseCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import { Grid, Main, SpinnerWrapper } from "../../lib/style/generalStyles";
import { RotatingLines } from "react-loader-spinner";

const Home = () => {
  const [courses, setCourses] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const n = 4;

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
          path={"/courses"}
        >
          {!loaded ? (
            <Grid>
              {[...Array(n)].map((e, i) => (
                <SpinnerWrapper key={i}>
                  <RotatingLines
                    width="100"
                    strokeColor="#bf3939"
                    strokeWidth="1"
                  />
                </SpinnerWrapper>
              ))}
            </Grid>
          ) : (
            courses && (
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
            )
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

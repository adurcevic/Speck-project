import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Main, Button } from "../../lib/style/generalStyles";
import Section from "../../components/Section/Section";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import coursesMock from "../../lib/mock/courses";

const Course = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState(null);
  const [course, setCourse] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    setCourses(coursesMock);
  }, []);

  useEffect(() => {
    courses &&
      setCourse(...courses.filter((course) => course.id === parseInt(id)));
  }, [courses, id]);

  return (
    <>
      <Header isSecondary={true} />
      {course && (
        <Main>
          <Section
            title={course.title}
            actionText={course.subtitle}
            isHeadingVisible={true}
            isMainTitle={true}
            customElement={
              <Button
                isHeading={true}
                isOutline={true}
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
            }
          >
            <SingleCourse
              imgSrc={course.imgSrc}
              imgAlt={course.imgAlt}
              text={course.text}
            />
          </Section>
        </Main>
      )}
    </>
  );
};

export default Course;

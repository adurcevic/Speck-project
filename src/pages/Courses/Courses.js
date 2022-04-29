import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import Grid from "../../components/Grid/Grid";
import CourseCard from "../../components/CourseCard/CourseCard";
import LectureImg1 from "../../assets/images/lecture-1.jpg";
import LectureImg2 from "../../assets/images/lecture-2.jpg";
import LectureImg3 from "../../assets/images/lecture-3.jpg";
import LectureImg4 from "../../assets/images/lecture-4.jpg";
import LectureImg5 from "../../assets/images/lecture-5.jpg";
import LectureImg6 from "../../assets/images/lecture-6.jpg";
import LectureImg7 from "../../assets/images/lecture-7.jpg";
import LectureImg8 from "../../assets/images/lecture-8.jpg";

const Courses = () => {
  return (
    <>
      <Header />
      <Main>
        <Section Tag={"h1"} title={"All lectures"} isHeadingVisible={true}>
          <Grid>
            <CourseCard
              imgSrc={LectureImg1}
              imgAlt={"Introduction"}
              title={"1. Introduction"}
              subtitle={"60 Minutes"}
            />
            <CourseCard
              imgSrc={LectureImg2}
              imgAlt={"HTML & CSS"}
              title={"2. HTML & CSS"}
              subtitle={"120+ Minutes"}
            />
            <CourseCard
              imgSrc={LectureImg3}
              imgAlt={"Version Control System"}
              title={"3. Version Control System"}
              subtitle={"120+ Minutes"}
            />
            <CourseCard
              imgSrc={LectureImg4}
              imgAlt={"Advanced CSS"}
              title={"4. Advanced CSS"}
              subtitle={"120+ Minutes"}
            />
            <CourseCard
              imgSrc={LectureImg5}
              imgAlt={"JavaScript Basics"}
              title={"5. JavaScript Basics"}
              subtitle={"60 Minutes"}
            />
            <CourseCard
              imgSrc={LectureImg6}
              imgAlt={"Advanced JavaScript"}
              title={"6. Advanced JavaScript"}
              subtitle={"120+ Minutes"}
            />
            <CourseCard
              imgSrc={LectureImg7}
              imgAlt={"Intro to React"}
              title={"7. Intro to React"}
              subtitle={"120+ Minutes"}
            />
            <CourseCard
              imgSrc={LectureImg8}
              imgAlt={"React events & Conditionals"}
              title={"8. React events & Conditionals"}
              subtitle={"120+ Minutes"}
            />
          </Grid>
        </Section>
      </Main>
    </>
  );
};

export default Courses;

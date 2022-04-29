import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import LectureImg1 from "../../assets/images/lecture-1.jpg";

const Course = () => {
  return (
    <>
      <Header modifiers={["secondary"]} />
      <Main>
        <Section
          Tag={"h1"}
          title={"1. Introduction"}
          actionText={"120+ Minutes"}
          buttonText={"Back"}
          isHeadingVisible={true}
          path={-1}
        >
          <SingleCourse imgSrc={LectureImg1} imgAlt={"lecture image"} />
        </Section>
      </Main>
    </>
  );
};

export default Course;

import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Section from "../../components/Section/Section";
import SingleCourse from "../../components/SingleCourse/SingleCourse";

const Course = () => {
  return (
    <>
      <Header />
      <Main>
        <Section
          Tag={"h1"}
          title={"1. Introduction"}
          actionText={"120+ Minutes"}
          buttonText={"Back"}
          isHeadingVisible={true}
        >
          <SingleCourse />
        </Section>
      </Main>
    </>
  );
};

export default Course;

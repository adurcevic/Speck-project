import React from "react";
import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";

const SignIn = () => {
  return (
    <>
      <Header isSecondary={true}></Header>
      <Section title={"Sign In"} isMainTitle={true} isCentered={true}></Section>
    </>
  );
};

export default SignIn;

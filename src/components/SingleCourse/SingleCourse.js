import React from "react";
import {
  SingleCourse as SingleCourseWrapper,
  Figure,
  Image,
  Text,
} from "./SingleCourseStyle";

const SingleCourse = ({ imgSrc, imgAlt, text }) => {
  return (
    <SingleCourseWrapper>
      <Figure>
        <Image src={imgSrc} alt={imgAlt} />
      </Figure>
      <Text>{text}</Text>
    </SingleCourseWrapper>
  );
};

export default SingleCourse;

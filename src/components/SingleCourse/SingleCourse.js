import React from "react";
import "./SingleCourse.scss";

const SingleCourse = ({ imgSrc, imgAlt, text }) => {
  return (
    <div className="SingleCourse">
      <figure className="SingleCourse-Figure">
        <img className="SingleCourse-Image" src={imgSrc} alt={imgAlt} />
      </figure>
      <p className="SingleCourse-Text">{text}</p>
    </div>
  );
};

export default SingleCourse;

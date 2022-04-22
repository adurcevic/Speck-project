import React from "react";
import "./CourseCard.scss";

const CourseCard = ({ imgSrc, imgAlt, title, subtitle }) => {
  return (
    <a href="course.html" className="Course">
      <figure className="Course-Figure">
        <img src={imgSrc} alt={imgAlt} className="Course-Img" />
      </figure>
      <h3 className="Course-Title">{title}</h3>
      <p className="Course-Subtitle">{subtitle}</p>
    </a>
  );
};

export default CourseCard;

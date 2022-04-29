import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.scss";

const CourseCard = ({ imgSrc, imgAlt, title, subtitle }) => {
  return (
    <Link to="/course" className="Course">
      <figure className="Course-Figure">
        <img src={imgSrc} alt={imgAlt} className="Course-Img" />
      </figure>
      <h3 className="Course-Title">{title}</h3>
      <p className="Course-Subtitle">{subtitle}</p>
    </Link>
  );
};

export default CourseCard;

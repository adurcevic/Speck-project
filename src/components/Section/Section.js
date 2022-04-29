import React from "react";
import Button from "../Button/Button";
import "./Section.scss";

const Section = ({
  modifiers,
  actionText,
  title,
  Tag,
  buttonText,
  isHeadingVisible = true,
  children,
}) => {
  const modifierClasses = {
    testimonials: "Section_testimonials",
  };

  let sectionClass = "Section";

  if (modifiers) {
    modifiers.map((modifier) => {
      sectionClass += " " + modifierClasses[modifier];
    });
  }

  return (
    <section className={sectionClass}>
      <div className="Section-Inner">
        {actionText && <span className="Section-ActionText">{actionText}</span>}
        {isHeadingVisible && (
          <div className="Section-Heading">
            {title && <Tag className="Section-Title">{title}</Tag>}
            {buttonText && (
              <Button modifiers={["heading", "outline"]}>{buttonText}</Button>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;

import React from "react";
import Button from "../Button/Button";
import {
  Section as SectionWrapper,
  SectionInner,
  ActionText,
  Heading,
  Title,
} from "./SectionStyle";

const Section = ({
  modifiers,
  actionText,
  title,
  path,
  buttonText,
  isHeadingVisible = true,
  children,
  isTestimonial,
}) => {
  return (
    <SectionWrapper isTestimonial={isTestimonial}>
      <SectionInner>
        {actionText && <ActionText>{actionText}</ActionText>}
        {isHeadingVisible && (
          <Heading>
            {title && <Title>{title}</Title>}
            {buttonText && (
              <Button path={path} modifiers={["heading", "outline"]}>
                {buttonText}
              </Button>
            )}
          </Heading>
        )}
        {children}
      </SectionInner>
    </SectionWrapper>
  );
};

export default Section;

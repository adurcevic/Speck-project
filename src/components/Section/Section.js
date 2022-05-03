import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../lib/style/generalStyles";
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
  let navigate = useNavigate();

  return (
    <SectionWrapper isTestimonial={isTestimonial}>
      <SectionInner>
        {actionText && <ActionText>{actionText}</ActionText>}
        {isHeadingVisible && (
          <Heading>
            {title && <Title>{title}</Title>}
            {buttonText && (
              <Button
                onClick={() => navigate(path)}
                isHeading={true}
                isOutline={true}
                // modifiers={["heading", "outline"]}
              >
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

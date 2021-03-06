import React from "react";
import {
  Section as SectionWrapper,
  SectionInner,
  ActionText,
  Heading,
  H2,
  H1,
} from "./SectionStyle";

const Section = ({
  modifiers,
  actionText,
  title,
  isHeadingVisible = true,
  children,
  isTestimonial,
  isMainTitle = false,
  isCentered = false,
  customElement,
}) => {
  return (
    <SectionWrapper isTestimonial={isTestimonial}>
      <SectionInner>
        {actionText && <ActionText>{actionText}</ActionText>}
        {isHeadingVisible && (
          <Heading>
            {title && { isMainTitle } ? (
              <H1 isCentered={isCentered}>{title}</H1>
            ) : (
              <H2 isCentered={isCentered}>{title}</H2>
            )}
            {customElement && customElement}
          </Heading>
        )}
        {children}
      </SectionInner>
    </SectionWrapper>
  );
};

export default Section;

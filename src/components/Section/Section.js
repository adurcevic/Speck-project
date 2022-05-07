import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../lib/style/generalStyles";
import SearchBar from "../SearchBar/SearchBar";
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
  path,
  buttonText,
  isHeadingVisible = true,
  children,
  isTestimonial,
  isMainTitle = false,
  isCentered = false,
  isSearchBarVisible = false,
  disabled,
  placeholder,
}) => {
  let navigate = useNavigate();

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
            {isSearchBarVisible && (
              <SearchBar disabled={disabled} placeholder={placeholder} />
            )}
            {buttonText && (
              <Button
                onClick={() => navigate(path)}
                isHeading={true}
                isOutline={true}
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

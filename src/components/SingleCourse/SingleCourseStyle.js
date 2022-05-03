import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const SingleCourse = styled.div`
  @media (${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Figure = styled.figure`
  width: 100%;
  height: auto;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 32px;

  @media (${breakpoints.tablet}) {
    width: 350px;
    height: 350px;
    margin-bottom: 0;
    flex-shrink: 0;
  }

  @media (${breakpoints.destkopLarge}) {
    width: 450px;
    height: 450px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 2;
  color: ${colors.textPrimary};

  @media (${breakpoints.tablet}) {
    padding-left: 48px;
  }

  @media (${breakpoints.destkopLarge}) {
    padding-left: 64px;
  }
`;

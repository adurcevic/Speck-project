import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${breakpoints.tabletMedium}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Figure = styled.figure`
  margin-bottom: 24px;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  @media (${breakpoints.tabletMedium}) {
    margin-bottom: 0;
    width: 180px;
    height: 180px;
  }

  @media (${breakpoints.tablet}) {
    width: 230px;
    height: 230px;
  }

  @media (${breakpoints.destkop}) {
    width: 300px;
    height: 300px;
  }

  @media (${breakpoints.destkopLarge}) {
    width: 350px;
    height: 350px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  @media (${breakpoints.tabletMedium}) {
    padding-left: 60px;
  }

  @media (${breakpoints.destkop}) {
    padding-left: 100px;
  }

  @media (${breakpoints.destkopLarge}) {
    padding-left: 120px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 18px;
  line-height: 180%;
  color: ${colors.textSecondary};

  @media (${breakpoints.tabletMedium}) {
    text-align: left;
    font-size: 18px;
  }

  @media (${breakpoints.tablet}) {
    font-size: 24px;
  }

  @media (${breakpoints.destkop}) {
    font-size: 30px;
  }
`;

export const Quotation = styled.span`
  font-size: 36px;

  @media (${breakpoints.tablet}) {
    font-size: 42px;
  }

  @media (${breakpoints.destkop}) {
    font-size: 48px;
  }
`;

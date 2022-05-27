import styled from "styled-components";
import { colors, breakpoints } from "../../lib/style/theme";

export const Landing = styled.div`
  position: relative;
  height: 100vh;
`;

export const Figure = styled.figure`
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const OverlayPrimary = styled.div`
  position: absolute;
  left: 0;
  width: 27%;
  height: 100%;
  background-color: ${colors.bgOverlayPrimary};
`;

export const OverlaySecondary = styled.div`
  position: absolute;
  right: 0;
  width: 73%;
  height: 100%;
  background-color: ${colors.bgOverlaySecondary};
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 24px;

  @media (${breakpoints.tabletMedium}) {
    padding-left: 24px;
    padding-right: 0;
  }

  @media (${breakpoints.destkop}) {
    padding-left: 0;
    left: calc((100% - 960px) / 2);
    width: 960px;
  }

  @media (${breakpoints.destkopLarge}) {
    left: calc((100% - 1260px) / 2);
    width: 1260px;
  }
`;

export const ContentInner = styled.div``;

export const Title = styled.h1`
  font-size: 28px;
  color: ${colors.secondary};
  margin-bottom: 24px;
  @media (${breakpoints.mobileLarge}) {
    font-size: 32px;
  }

  @media (${breakpoints.tabletSmall}) {
    font-size: 38px;
  }

  @media (${breakpoints.tabletMedium}) {
    text-align: start;
    width: 550px;
  }

  @media (${breakpoints.tablet}) {
    padding: 0;
    font-size: 48px;
  }

  @media (${breakpoints.destkop}) {
    font-size: 56px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  width: 260px;
  line-height: 180%;
  color: ${colors.secondary};
  margin-bottom: 48px;

  @media (${breakpoints.mobileLarge}) {
    font-size: 16px;
    width: 350px;
  }

  @media (${breakpoints.tabletSmall}) {
    width: 370px;
  }

  @media (${breakpoints.tablet}) {
    width: 440px;
  }
`;

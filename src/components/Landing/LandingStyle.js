import styled from "styled-components";
import { colors } from "../../lib/style/theme";

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
  background-color: #bf3939ef;
  /* width: 27%; */
`;

export const OverlaySecondary = styled.div`
  position: absolute;
  right: 0;
  width: 73%;
  height: 100%;
  background-color: #000000ad;
  /* width: 73%; */
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  left: calc((100% - 1260px) / 2);
  width: 1260px;
  height: 100%;
  display: flex;
  align-items: center;
  left: calc((100% - 1260px) / 2);
  width: 1260px;
`;

export const ContentInner = styled.div``;

export const Title = styled.h1`
  font-size: 56px;
  width: 550px;
  color: ${colors.secondary};
  margin-bottom: 24px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  line-height: 180%;
  color: ${colors.secondary};
  width: 440px;
  margin-bottom: 48px;
`;

import styled from "styled-components";
import { colors } from "../../lib/style/theme";

export const Testimonial = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Figure = styled.figure`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  padding-left: 120px;
`;

export const Text = styled.p`
  font-size: 30px;
  line-height: 180%;
  color: ${colors.textSecondary};
`;

export const Quotation = styled.span`
  font-size: 48px;
`;

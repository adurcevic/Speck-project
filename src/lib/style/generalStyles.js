import styled from "styled-components";
import { breakpoints } from "./theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 48px;

  @media (${breakpoints.tabletSmall}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }

  @media (${breakpoints.destkop}) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 48px;
  }

  @media (${breakpoints.destkopLarge}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

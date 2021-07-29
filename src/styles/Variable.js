import { css } from 'styled-components';

export const flexSet = (justify = 'center', align = 'center') => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

export const mediaQuery = {
  BREAK_POINT_MOBILE: 760,
  BREAK_POINT_TABLET: 1060,
};

export const mainPadding = (desktop = '60px', tablet = '40px') => css`
  padding: 10px 60px;

  @media only screen and (max-width: ${mediaQuery.BREAK_POINT_TABLET}px) {
    padding: 10px 40px;
  }
`;

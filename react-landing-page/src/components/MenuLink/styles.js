import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${(theme) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.onBeforeInput.sizes.small};
    padding: ${theme.spacings.small};
    color: ${theme.colors.primaryColor};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      width: 0;
      botton: 0;
      height: 0.2rem;
      background: ${theme.colors.secundaryColor};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`
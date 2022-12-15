import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.sans}, sans-serif;
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.onBackground};
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.onBackground};
    underline-offset: ${({ theme }) => theme.spacing[2]};
  }
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.screens.sm};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing[4]};

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    max-width: ${({ theme }) => theme.screens.md};
  }

  @media (min-width: ${({ theme }) => theme.screens.lg}) {
    max-width: ${({ theme }) => theme.screens.lg};
  }

  @media (min-width: ${({ theme }) => theme.screens.xl}) {
    max-width: ${({ theme }) => theme.screens.xl};
  }
`;

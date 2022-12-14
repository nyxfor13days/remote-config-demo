import { createGlobalStyle } from "styled-components";

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

  body: {
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

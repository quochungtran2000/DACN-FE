import { createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

type Props = {
  theme: typeof lightTheme | typeof darkTheme;
};

export const GlobalStyles = createGlobalStyle<Props>`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    margin: 0;
     /* height: 50vh; */
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

  }
  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
  small {
    display: block;
  }
  button {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.text};
  }
`;

import { createGlobalStyle } from "styled-components";

//To style elements outside of root render
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

// Aqua theme
export const aquaTheme = {
  body: "#EDEDED",
  text: "#000",
  colors: {
    main: "#0000a6",
    shadowPrimaryBtn: "#000073",
    shadowSecondaryBtn: "#0000a6",
    btnText: "#fff",
    dark: "#0000a6"
  }
};

// Opus theme
export const opusTheme = {
  body: "#EDEDED",
  text: "#000",
  colors: {
    main: "#007680",
    shadowPrimaryBtn: "#002f34",
    shadowSecondaryBtn: "#007680",
    btnText: "#fff",
    dark: "#007680"
  }
};

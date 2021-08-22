import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    PrimaryGreen: "#4db8bc",
    DarkerGreen : "#459296",
    backgroundBlack: "#010101",
    backgroundGray : "#222222",
    grey : "#333",
    lightBlue: "#AFDBD2",
    backgroundBlue : "#012169",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

import { DefaultTheme } from "styled-components/dist/types";
import "@fontsource/montserrat";

const theme: DefaultTheme = {
  color: {
    text: "#1C110A",
    primary: "#50A2A7",
    secondary: "#E4D6A7",
    nonSelectedButtons: "#E4D6A7",
    selected: "#9B2915",
  },
  fonts: {
    fontFamily: "Montserrat, sans-serif",
  },
  fontSizes: {
    weight: "400",
    smallSize: "1rem",
    titleSize: "1.25rem",
  },
};

export default theme;

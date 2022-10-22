import createTheme from "@mui/material/styles/createTheme";
import { orange, purple, green } from "@mui/material/colors";
import { CenterFocusStrong } from "@mui/icons-material";

export const theme = createTheme({
  status: {
    danger: orange[500],
  },
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontSize: "1.2rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      fontWeight: 400,
    },
  },
});

export default theme;

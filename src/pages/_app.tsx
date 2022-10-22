import "../styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import { ThemeProvider } from "@emotion/react";
import Footer from "../components/Global/Footer";
import Header from "../components/Global/Header";
import MyAppBar from "../components/Global/MyAppBar";
import { CssBaseline } from "@mui/material";

var _ = require("lodash");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CssBaseline />
      <MyAppBar />
      <Component {...pageProps} />;
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;

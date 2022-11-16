import Base from "@components/surfaces/Base";
import { ThemeProvider } from "@mui/material";
import "@styles/globals.css";
import type { AppProps } from "next/app";
import theme from "ui/theme/light-theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Base>
        <Component {...pageProps} />
      </Base>
    </ThemeProvider>
  );
}

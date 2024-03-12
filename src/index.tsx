import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RecoilRoot } from "recoil";
import "react-app-polyfill/stable";
import { GlobalStyle } from "./components/styles";
import { ThemeProvider } from "styled-components";
import { typograph } from "./assets/styles/typograph";
import { colors } from "./assets/styles/colors";

// 이외에 필요한 스타일 파일이 있다면 import 해주세요.

const theme = {
  typograph: typograph,
  colors: colors,
};

ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById("root")
);

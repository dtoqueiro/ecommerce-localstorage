import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";

import { myTheme } from "./styles/MyTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        <h1>Hello World</h1>
      </ThemeProvider>
    </>
  );
}

export default App;

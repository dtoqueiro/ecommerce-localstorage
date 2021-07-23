import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { myTheme } from "./styles/MyTheme";
import Routes from "./routes/routes";

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;

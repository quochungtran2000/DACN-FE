import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import * as Sentry from "@sentry/react";
import { Route, Router, Switch } from "react-router";
import { Card } from "./components/Card";

function App() {
  const [theme, setTheme] = useState("light");
  const [themeConfig, setThemeConfig] = useState(lightTheme);

  const onToggleThemeClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  console.log(setThemeConfig);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header
          onDarkModeClick={onToggleThemeClick}
          theme={theme}
          themeColor={themeConfig}
        ></Header>
        <SideBar>ád</SideBar>
        <Switch>
          <Route path="/">
            <Card />
          </Route>
        </Switch>
        <footer></footer>
      </>
    </ThemeProvider>
  );
}

export default Sentry.withProfiler(App);

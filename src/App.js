import React, { Component } from "react";
import { Router } from "@reach/router";
import { ThemeProvider } from "styled-components";

import ArticlesAll from "./components/ArticlesAll";
import Article from "./components/Article";
import ErrorMsg from "./components/ErrorMsg";
import Header from "./components/Header";
import Footer from "./components/Footer";

import S from "./components/StyledComponents";
import themes from "./themes";
import off from "./lightSwitchOff.png";
import on from "./lightSwitchOn.png";

const switches = {
  on,
  off
};

class App extends Component {
  state = {
    userLoggedIn: "jessjelly",
    theme: "light",
    themeSwitchButton: switches.on
  };

  setUserLoggedIn = username => {
    this.setState({ userLoggedIn: username });
  };

  switchTheme = () => {
    if (this.state.theme === "dark") {
      this.setState({ theme: "light", themeSwitchButton: switches.on });
    } else {
      this.setState({ theme: "dark", themeSwitchButton: switches.off });
    }
  };

  render() {
    const { userLoggedIn, themeSwitchButton } = this.state;

    return (
      <ThemeProvider theme={themes[this.state.theme]}>
        <S.AppContainer>
          <Header
            userLoggedIn={userLoggedIn}
            setUserLoggedIn={this.setUserLoggedIn}
            themeSwitchButton={themeSwitchButton}
            switchTheme={this.switchTheme}
          />
          <Router>
            <ArticlesAll path="/" />
            <Article path="/articles/:article_id" userLoggedIn={userLoggedIn} />
            <ArticlesAll path="/articles/topics/:topic" />
            <ArticlesAll path="/articles/authors/:author" />
            <ErrorMsg status="404" msg="Page Not Found" default />
          </Router>
          <Footer />
        </S.AppContainer>
      </ThemeProvider>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Router } from "@reach/router";
import { ThemeProvider } from "styled-components";
import moment from "moment";

import ArticlesAll from "./components/ArticlesAll";
import Article from "./components/Article";
import ErrorMsg from "./components/ErrorMsg";
import Footer from "./components/Footer";

import S from "./components/StyledComponents";
import { dark, light } from "./themes";
import Login from "./components/Login";

class App extends Component {
  state = {
    userLoggedIn: "jessjelly"
  };

  setUserLoggedIn = username => {
    this.setState({ userLoggedIn: username });
  };

  render() {
    const { userLoggedIn } = this.state;
    return (
      <ThemeProvider theme={dark}>
        <S.AppContainer>
          <S.HeaderContainer to="/">
            <S.HeaderTitle>❥The Daily News</S.HeaderTitle>
            <S.HeaderSubtitle>Brought To You By ▸Press JL</S.HeaderSubtitle>
          </S.HeaderContainer>
          <S.HeaderDetails>
            <span>VOL. I. No. 1.</span>
            <span>{moment().format("dddd Do MMMM YYYY")}</span>
            <Login
              userLoggedIn={userLoggedIn}
              setUserLoggedIn={this.setUserLoggedIn}
            />
          </S.HeaderDetails>
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

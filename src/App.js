import React from "react";
import { Router } from "@reach/router";
import { ThemeProvider } from "styled-components";
import moment from "moment";

import ArticlesAll from "./components/ArticlesAll";
import Article from "./components/Article";
import ErrorMsg from "./components/ErrorMsg";

import S from "./components/StyleComponents";
import { dark, light } from "./themes";

function App() {
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
          <span>Since 2020</span>
        </S.HeaderDetails>
        <Router>
          <ArticlesAll path="/" />
          <Article path="/articles/:article_id" />
          <ArticlesAll path="/articles/topics/:topic" />
          <ArticlesAll path="/articles/authors/:author" />
          <ErrorMsg status="404" msg="Page Not Found" default />
        </Router>
      </S.AppContainer>
    </ThemeProvider>
  );
}

export default App;

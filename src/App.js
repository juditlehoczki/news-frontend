import React from "react";
import { Router } from "@reach/router";

import ArticlesAll from "./components/ArticlesAll";
import Article from "./components/Article";
import ErrorMsg from "./components/ErrorMsg";

import S from "./components/StyleComponents";

function App() {
  return (
    <S.AppContainer>
      <S.Header to="/">Press JL</S.Header>
      <Router>
        <ArticlesAll path="/" />
        <Article path="/articles/:article_id" />
        <ArticlesAll path="/articles/topics/:topic" />
        <ArticlesAll path="/articles/authors/:author" />
        <ErrorMsg status="404" msg="Page Not Found" default />
      </Router>
    </S.AppContainer>
  );
}

export default App;

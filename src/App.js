import React from "react";
import { Router } from "@reach/router";

import ArticlesAll from "./components/ArticlesAll";
import Article from "./components/Article";

import S from "./components/StyleComponents";

function App() {
  return (
    <S.AppContainer>
      <S.Header to="/">Press JL</S.Header>
      <Router>
        <ArticlesAll path="/" />
        <Article path="/articles/:article_id" />
        <ArticlesAll path="/articles/topics/:topic" />
      </Router>
    </S.AppContainer>
  );
}

export default App;

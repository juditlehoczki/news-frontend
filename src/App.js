import React from 'react';
import { Router } from '@reach/router';

import ArticlesAll from './components/ArticlesAll';
import Article from './components/Article';

import S from './components/StyleComponents';

function App() {
  return (
    <S.AppContainer>
      <S.Header>Press JL</S.Header>
      <Router>
        <ArticlesAll path="/" />
        <Article path="/articles/:article_id" />
      </Router>
    </S.AppContainer>
  );
}

export default App;

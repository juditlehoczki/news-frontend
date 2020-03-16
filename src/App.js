import React from 'react';
import { Router } from '@reach/router';

import ArticlesAll from './components/ArticlesAll';

import S from './components/StyleComponents';

function App() {
  return (
    <S.AppContainer>
      <S.Header>Press JL</S.Header>
      <Router>
        <ArticlesAll path="/" />
      </Router>
    </S.AppContainer>
  );
}

export default App;

import styled from 'styled-components';

const S = {};

S.AppContainer = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

S.Header = styled.h1`
  border: 1px solid black;
  margin: 0px;
  font-size: 1.5em;
`;

S.ArticlePreview = styled.div`
  border: 1px solid black;
  margin: 5px auto;
  padding: 5px;
`;

S.ArticlePreviewTitle = styled.h1`
  font-size: 1.5em;
`;

S.Article = styled.div`
  border: 1px solid black;
  margin: 5px auto;
  padding: 5px;
`;

S.ArticleTitle = styled.h1`
  font-size: 1.5em;
`;

export default S;

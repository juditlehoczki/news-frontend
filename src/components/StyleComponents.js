import styled from "styled-components";
import { Link } from "@reach/router";

const S = {};

S.AppContainer = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.fonts.main};
`;

S.Header = styled(Link)`
  // border: 1px solid black;
  padding: 0px 5px;
  margin: 0px;
  font-size: 2em;
  font-family: ${props => props.theme.fonts.header};
  text-decoration: none;
  text-align: left;
  color: ${props => props.theme.colours.mainFont};
`;

S.TopicsContainer = styled.div`
  border: 1px solid black;
`;

S.TopicSlug = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 0px 5px;
  text-decoration: none;
  color: ${props => props.theme.colours.mainFont};
`;

S.TopicDescription = styled.div``;

S.ArticlesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

S.ArticlePreview = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  margin: 5px auto;
  padding: 5px;
  min-width: 330px;
  width: 48%;
  background: ${props => props.theme.colours.bg};
`;

S.ArticlePreviewTitle = styled(Link)`
  color: ${props => props.theme.colours.mainFont};
  text-decoration: none;
  font-size: 1.2em;
  font-family: ${props => props.theme.fonts.title};
`;

S.ArticlePreviewDetails = styled.div`
  font-size: 0.8em;
`;

S.WrittenByLink = styled(Link)`
  text-decoration: underline dotted black;
  &:hover {
    background: lightgrey;
    border-radius: 5px;
  }
`;

S.TopicLink = styled(Link)`
  text-decoration: underline dotted black;
  &:hover {
    background: blue;
  }
`;

S.Reactions = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0px;

  > * {
    margin: 0px auto;
  }
`;

S.Article = styled.div`
  border: 1px solid black;
  margin: 5px auto;
  padding: 5px;
`;

S.ArticleTitle = styled.h1`
  font-size: 1.5em;
  font-family: ${props => props.theme.fonts.title};
`;

S.ArticleBody = styled.article`
  text-align: justify;
  text-indent: 3%;
  padding: 0px 10px;
  margin: 20px 0px;
  font-size: 1em;
  line-height: 1.5;
`;

S.CommentTile = styled.div`
  border: 1px solid black;
  margin: 5px auto;
  padding: 5px;
`;

S.CommentPostContainer = styled.div`
  border: 1px solid black;
  margin: 5px auto;
  padding: 5px;
`;

S.CommentPostInput = styled.input`
  width: 80%;
  height: 10em;
`;

export default S;

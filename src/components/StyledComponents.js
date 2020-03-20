import styled, { css } from "styled-components";
import { Link } from "@reach/router";

const S = {};

const simpleBorder = css`
  border: 1px solid ${props => props.theme.colours.colour};
  border-radius: 2px;
`;

const link = css`
  text-decoration: underline dotted ${props => props.theme.colours.fg};
  color: ${props => props.theme.colours.colour};
  &:hover {
    background: ${props => props.theme.colours.light};
    border-radius: 5px;
  }
`;

S.AppContainer = styled.div`
  margin: 0px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: ${props => props.theme.fonts.main};
  background: ${props => props.theme.colours.bg};
`;

S.HeaderContainer = styled(Link)`
  max-width: content;
  padding: 0px 5px;
  text-decoration: none;
  color: ${props => props.theme.colours.fg};
`;

S.HeaderTitle = styled.h1`
  font-size: 3em;
  font-family: ${props => props.theme.fonts.header1};
  margin: 0px;
`;

S.HeaderSubtitle = styled.h2`
  font-family: ${props => props.theme.fonts.header2};
  font-size: 0.7em;
  line-height: 0.1;
  text-align: right;
  margin: 0px;
`;

S.HeaderDetails = styled.h2`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${props => props.theme.colours.fg};
  border-bottom: 1px solid ${props => props.theme.colours.fg};
  width: 100%;
  font-size: 0.75em;
  color: ${props => props.theme.colours.fg};
  padding: 10px 0px;
`;

S.TopicsContainer = styled.div`
  ${simpleBorder}
`;

S.TopicSlug = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 0px 20px;
  text-decoration: none;
  color: ${props => props.theme.colours.fg};
`;

S.TopicDescription = styled.div``;

S.ArticlesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

S.ArticlePreview = styled.div`
  ${simpleBorder}
  margin: 5px auto;
  padding: 5px;
  min-width: 330px;
  width: 48%;
  background: ${props => props.theme.colours.bg};
`;

S.ArticlePreviewTitle = styled(Link)`
  color: ${props => props.theme.colours.fg};
  text-decoration: none;
  font-size: 1.2em;
  font-family: ${props => props.theme.fonts.title};
`;

S.ArticlePreviewDetails = styled.div`
  font-size: 0.8em;
`;

S.WrittenByLink = styled(Link)`
  ${link}
`;

S.TopicLink = styled(Link)`
  ${link}
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
  ${simpleBorder}
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
  ${simpleBorder}
  margin: 5px auto;
  padding: 5px;
`;

S.CommentPostContainer = styled.div`
  ${simpleBorder}
  margin: 5px auto;
  padding: 5px;
`;

S.CommentPostInput = styled.input`
  width: 80%;
  height: 10em;
`;

S.Footer = styled.div`
  font-size: 0.6em;
  & a {
   ${link}
    }
  }
`;

export default S;

import styled, { css } from "styled-components";
import { Link } from "@reach/router";

const S = {};

const simpleBorder = css`
  border: 1px solid ${props => props.theme.colours.colour};
  border-radius: 3px;
`;

const link = css`
  font-size: 1em;
  font-family: inherit;
  text-decoration: underline dotted ${props => props.theme.colours.fg};
  color: ${props => props.theme.colours.fg};
  &:hover {
    background: ${props => props.theme.colours.fg};
    color: ${props => props.theme.colours.bg};
  }
`;

const button = css`
  background-color: ${props => props.theme.colours.fg};
  border: none;
  border-radius: 3px;
  color: ${props => props.theme.colours.bg};
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colours.bg};
    color: ${props => props.theme.colours.fg};
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

S.Header = styled(Link)`
  max-width: content;
  padding: 0px 5px;
  text-decoration: none;
  color: ${props => props.theme.colours.fg};
  h1 {
    font-size: 3em;
    font-family: ${props => props.theme.fonts.header1};
    margin: 0px;
    @media (max-width: 370) {
      font-size: 0.5em;
    }
  }
  h2 {
    font-family: ${props => props.theme.fonts.header2};
    font-size: 0.7em;
    line-height: 0.1;
    text-align: right;
    margin: 0px;
  }
`;

S.SubHeader = styled.h2`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${props => props.theme.colours.fg};
  border-bottom: 1px solid ${props => props.theme.colours.fg};
  width: 100%;
  font-size: 0.75em;
  color: ${props => props.theme.colours.fg};
  padding: 10px 0px;
  .switch {
    background-color: ${props => props.theme.colours.bg};
    border: none;
    font-size: 2em;
    cursor: pointer;
  }
`;

S.NavContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

S.NavBarElement = styled.span`
  button {
    ${button}
  }
  a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: ${props => props.theme.colours.fg};
    & button {
      ${button}
    }
  }
`;

S.ArticlesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme.colours.fg};
`;

S.ArticlePreview = styled.div`
  ${simpleBorder}
  margin: 5px auto;
  padding: 5px;
  min-width: 330px;
  width: 48%;
  text-align: center;
  align-items: center;
  background: ${props => props.theme.colours.bg};
  display: grid;
  grid-template-areas: "reactions detail detail detail detail detail detail detail detail detail";
  .title {
    grid-area: title;
    color: ${props => props.theme.colours.fg};
    text-decoration: none;
    font-size: 1.2em;
    font-family: ${props => props.theme.fonts.title};
  }
  .reactions {
    grid-area: reactions;
    margin: 0px;
    text-align: center;
    width: 40px;
  }
  div {
    grid-area: detail;
    font-size: 0.8em;
  }
`;

S.WrittenByLink = styled(Link)`
  ${link}
`;

S.TopicLink = styled(Link)`
  ${link}
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

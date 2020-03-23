import styled, { css } from "styled-components";
import { Link } from "@reach/router";

const S = {};

const simpleBorder = css`
  border: 1px solid ${props => props.theme.colours.fg};
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
${simpleBorder}
  background-color: ${props => props.theme.colours.bg};
  color: ${props => props.theme.colours.fg};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1em;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colours.fg};
    color: ${props => props.theme.colours.bg};
  }
`;

const disabledButton = css`
  background: lightgrey;
  border: 1px solid lightgrey;
  color: white;
  cursor: not-allowed;
`;

S.AppContainer = styled.div`
  min-height: 100vh;
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
  padding: 5px 5px;
  text-decoration: none;
  color: ${props => props.theme.colours.fg};
  h1 {
    font-size: 3.3em;
    font-family: ${props => props.theme.fonts.header1};
    margin: 0px;
  }
  h2 {
    font-family: ${props => props.theme.fonts.header2};
    font-size: 0.7em;
    line-height: 0.1;
    text-align: right;
    margin: 0px;
  }
  @media (max-width: 825px) {
    h1 {
      font-size: 2.5em;
    }
    h2 {
      font-size: 0.5em;
    }
  }
  @media (max-width: 420px) {
    h1 {
      font-size: 1.3em;
    }
    h2 {
      font-size: 0.3em;
    }
  }
`;

S.SubHeader = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 3px solid ${props => props.theme.colours.fg};
  border-bottom: 3px solid ${props => props.theme.colours.fg};
  width: 100%;
  font-size: 1em;
  color: ${props => props.theme.colours.fg};
  padding: 5px 0px;
  span {
    padding: 0px 10px;
    vertical-align: top;
  }
  button {
    border: none;
    cursor: pointer;
    background-color: ${props => props.theme.colours.bg};
    color: ${props => props.theme.colours.fg};
    text-decoration: underline dotted ${props => props.theme.colours.fg};
  }
  input {
    ${simpleBorder}
  }
  @media (max-width: 825px) {
    font-size: 0.8em;
  }
  @media (max-width: 420px) {
    font-size: 0.6em;
  }
  .switch {
    background-color: white;
    border: 3px black solid;
    border-radius: 50%;
    padding: 5px 12px;
    cursor: pointer;
    display: inline-block;
  }
`;

S.NavContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
`;

S.NavBarElement = styled.span`
  width: 50%;
  button {
    ${button}
    padding: 5px 20px;
  }
  a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: ${props => props.theme.colours.fg};
    & button {
      ${button}
      padding: 5px 20px;
    }
  }
  @media (max-width: 825px) {
    font-size: 1em;
  }
  @media (max-width: 420px) {
    font-size: 0.8em;
    button {
      padding: 2px 2px;
      margin: 2px;
    }
    a {
      button {
        padding: 2px 2px;
        margin: 2px;
      }
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
  grid-template-areas: "reactions detail detail detail detail detail detail detail";
  .title {
    grid-area: title;
    color: ${props => props.theme.colours.fg};
    text-decoration: none;
    font-size: 1.8em;
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
  margin: 5px 10px;
  padding: 5px;
  color: ${props => props.theme.colours.fg};
  h1 {
    font-size: 1.5em;
    font-family: ${props => props.theme.fonts.title};
  }
  article {
    text-align: justify;
    text-indent: 3%;
    padding: 0px 10px;
    margin: 20px 0px;
    font-size: 1em;
    line-height: 1.5;
  }
  button {
    ${button}
    &:disabled {
      ${disabledButton}}
    }
  }
`;

S.CommentTile = styled.div`
  ${simpleBorder}
  margin: 5px auto;
  padding: 5px;
  p {
    text-align: justify;
    text-indent: 3%;
    margin: 5px auto;
    padding: 0px 10px;
    font-size: 1em;
    line-height: 1.5;
  }
  div {
    text-align: left;
  }
  button {
    ${button}
    &:disabled {
      ${disabledButton}}
    }
  }
  .deleteButton {
    ${button}
    &: hover {
      background-color: red;
      color: ${props => props.theme.colours.fg};
    }
  }
`;

S.CommentPostContainer = styled.div`
  ${simpleBorder}
  margin: 5px auto;
  padding: 5px;
  textarea {
    ${simpleBorder}
    width: 80%;
    font-size: 1em;
  }
`;

S.Pagination = styled.div`
  color: ${props => props.theme.colours.fg};
  button {
    ${button}
    &:disabled {
      ${disabledButton}}
    }
  }
`;

S.Footer = styled.div`
  font-size: 0.6em;
  color: ${props => props.theme.colours.fg};
  padding: 20px;
  & a {
   ${link}
    }
  }
`;

export default S;

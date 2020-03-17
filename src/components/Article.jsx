import React, { Component } from "react";
import { Link } from "@reach/router";

import { fetchArticleById } from "../api";
import CommentsByArticle from "./CommentsByArticle";

import S from "./StyleComponents";

class Article extends Component {
  state = {
    article: {},
    isLoading: true
  };

  fetchArticle = id => {
    fetchArticleById(id)
      .then(({ data }) => {
        this.setState({ article: data.article, isLoading: false });
      })
      .catch(console.dir);
  };

  componentDidMount() {
    this.fetchArticle(this.props.article_id);
  }

  render() {
    const {
      title,
      body,
      votes,
      topic,
      author,
      created_at,
      comment_count
    } = this.state.article;
    return (
      <S.Article>
        <S.ArticleTitle>{title}</S.ArticleTitle>
        <Link to={`/articles/topics/${topic}`}>{topic}</Link>{" "}
        <p>Article: {body}</p>
        <span>
          Likes: {votes}
          Written by: {author}
          Date: {created_at}
          Comments: {comment_count}
        </span>
        <CommentsByArticle article_id={this.props.article_id} />
      </S.Article>
    );
  }
}

export default Article;

import React, { Component } from "react";
import { Link } from "@reach/router";

import { fetchArticleById } from "../api";
import CommentsByArticle from "./CommentsByArticle";
import Votes from "./Votes";
import CommentPost from "./CommentPost";
import ErrorMsg from "./ErrorMsg";

import S from "./StyleComponents";

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
    error: null
  };

  fetchArticle = id => {
    fetchArticleById(id)
      .then(({ data }) => {
        this.setState({ article: data.article, isLoading: false });
      })
      .catch(error => {
        this.setState({ error: error.response, isLoading: false });
      });
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
    const { error } = this.state;
    const { article_id } = this.props;
    return (
      <>
        {error ? (
          <ErrorMsg status={error.status} msg={error.data.msg} />
        ) : (
          <S.Article>
            <S.ArticleTitle>{title}</S.ArticleTitle>
            <Link to={`/articles/topics/${topic}`}>{topic}</Link>{" "}
            <p>Article: {body}</p>
            <span>
              <Votes type={"articles"} id={article_id} votes={votes} />
              <Link to={`/articles/authors/${author}`}>
                Written by: {author}
              </Link>
              Date: {created_at}
              Comments: {comment_count}
            </span>
            <CommentPost />
            <CommentsByArticle article_id={article_id} />
          </S.Article>
        )}
      </>
    );
  }
}

export default Article;

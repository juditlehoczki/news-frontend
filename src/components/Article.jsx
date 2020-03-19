import React, { Component } from "react";
import moment from "moment";

import { fetchArticleById } from "../api";
import CommentsByArticle from "./CommentsByArticle";
import Votes from "./Votes";
import ErrorMsg from "./ErrorMsg";

import S from "./StyledComponents";

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
            Written by{" "}
            <S.WrittenByLink to={`/articles/authors/${author}`}>
              {author}
            </S.WrittenByLink>{" "}
            in{" "}
            <S.TopicLink to={`/articles/topics/${topic}`}>{topic}</S.TopicLink>{" "}
            on {moment(created_at).format("DD-MM-YYYY")}
            <S.ArticleBody>{body}</S.ArticleBody>
            <S.Reactions>
              <Votes type={"articles"} id={article_id} votes={votes} />
              <p>✎{comment_count}</p>
            </S.Reactions>
            <CommentsByArticle
              article_id={article_id}
              userLoggedIn={this.props.userLoggedIn}
            />
          </S.Article>
        )}
      </>
    );
  }
}

export default Article;

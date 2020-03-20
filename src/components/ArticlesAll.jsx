import React, { Component } from "react";

import { fetchArticles } from "../api";
import ArticlePreview from "./ArticlePreview";
import ArticlesSorting from "./ArticlesSorting";
import Topics from "./Topics";
import ErrorMsg from "./ErrorMsg";

import S from "./StyledComponents";

class ArticlesAll extends Component {
  state = {
    articles: [],
    isLoading: true,
    error: null
  };

  getArticles = queries => {
    fetchArticles(queries)
      .then(({ data }) => {
        this.setState({ articles: data.articles, isLoading: false });
      })
      .catch(error => {
        this.setState({ error: error.response, isLoading: false });
      });
  };

  componentDidMount() {
    const { topic, author } = this.props;
    this.getArticles({ topic, author });
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    if (prevProps.topic !== this.props.topic) {
      this.getArticles({ topic });
    }
  }

  render() {
    const { articles, isLoading, error } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <Topics />
          <ArticlesSorting
            topic={this.props.topic}
            author={this.props.author}
            getArticles={this.getArticles}
          />
          {error && <ErrorMsg status={error.status} msg={error.data.msg} />}
          <S.ArticlesContainer>
            {articles.map(article => {
              return (
                <ArticlePreview key={article.article_id} article={article} />
              );
            })}
          </S.ArticlesContainer>
        </div>
      );
    }
  }
}

export default ArticlesAll;

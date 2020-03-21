import React, { Component } from "react";

import { fetchArticles } from "../api";
import ArticlePreview from "./ArticlePreview";
import ArticlesSorting from "./ArticlesSorting";
import Topics from "./Topics";
import ErrorMsg from "./ErrorMsg";
import Pagination from "./Pagination";

import S from "./StyledComponents";

class ArticlesAll extends Component {
  state = {
    articles: [],
    isLoading: true,
    error: null,
    p: 1,
    total_count: null
  };

  getArticles = queries => {
    fetchArticles(queries)
      .then(({ data }) => {
        this.setState({
          articles: data.articles,
          isLoading: false,
          total_count: data.total_count
        });
      })
      .catch(error => {
        this.setState({ error: error.response, isLoading: false });
      });
  };

  componentDidMount() {
    const { topic, author } = this.props;
    const { p } = this.state;
    this.getArticles({ topic, author, p });
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic, author } = this.props;
    const { p } = this.state;
    if (prevProps.topic !== this.props.topic) {
      this.getArticles({ topic });
    }
    if (prevState.p !== this.state.p) {
      this.getArticles({ topic, author, p });
    }
  }

  changePage = num => {
    this.setState(currentState => {
      return { p: currentState.p + num };
    });
  };

  render() {
    const { articles, isLoading, error, p, total_count } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <S.NavContainer>
            <Topics />
            <ArticlesSorting
              topic={this.props.topic}
              author={this.props.author}
              getArticles={this.getArticles}
            />
          </S.NavContainer>
          {error && <ErrorMsg status={error.status} msg={error.data.msg} />}
          <S.ArticlesContainer>
            {articles.map(article => {
              return (
                <ArticlePreview key={article.article_id} article={article} />
              );
            })}
          </S.ArticlesContainer>
          <Pagination
            changePage={this.changePage}
            p={p}
            total_count={total_count}
          />
        </div>
      );
    }
  }
}

export default ArticlesAll;

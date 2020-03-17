import React, { Component } from "react";

import { fetchArticles } from "../api";
import ArticlePreview from "./ArticlePreview";
import ArticlesSorting from "./ArticlesSorting";
import Topics from "./Topics";

class ArticlesAll extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  getArticles = queries => {
    fetchArticles(queries)
      .then(({ data }) => {
        this.setState({ articles: data.articles, isLoading: false });
      })
      .catch(console.dir);
  };

  componentDidMount() {
    const { topic } = this.props;
    this.getArticles({ topic });
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    if (prevProps.topic !== this.props.topic) {
      this.getArticles({ topic });
    }
  }

  render() {
    const { articles, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <ArticlesSorting
              topic={this.props.topic}
              getArticles={this.getArticles}
            />
            <Topics />
            {articles.map(article => {
              return (
                <ArticlePreview key={article.article_id} article={article} />
              );
            })}
          </div>
        )}
      </>
    );
  }
}

export default ArticlesAll;

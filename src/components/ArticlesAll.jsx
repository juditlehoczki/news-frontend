import React, { Component } from "react";
// import { Link } from "@reach/router";

import { fetchArticles } from "../api";
import ArticlePreview from "./ArticlePreview";
import ArticlesSorting from "./ArticlesSorting";

class ArticlesAll extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  fetchAllArticles = queries => {
    fetchArticles(queries)
      .then(({ data }) => {
        this.setState({ articles: data.articles, isLoading: false });
      })
      .catch(console.dir);
  };

  componentDidMount() {
    this.fetchAllArticles({});
  }

  render() {
    const { articles, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <ArticlesSorting fetchAllArticles={this.fetchAllArticles} />
            {
              // list of all topics
            }
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

import React, { Component } from 'react';

import { fetchArticles } from '../api';
import ArticlePreview from './ArticlePreview';

class ArticlesAll extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  fetchAllArticles = () => {
    fetchArticles().then(({ data }) => {
      this.setState({ articles: data.articles, isLoading: false });
    });
  };

  componentDidMount() {
    this.fetchAllArticles();
  }

  render() {
    const { articles, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
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

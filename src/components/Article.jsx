import React, { Component } from 'react';
import { fetchArticleById } from '../api';

import S from './StyleComponents';

class Article extends Component {
  state = {
    article: {
      article_id: 28,
      title: 'High Altitude Cooking',
      body:
        'Most backpacking trails vary only a few thousand feet elevation. However, many trails can be found above 10,000 feet. But what many people don’t take into consideration at these high altitudes is how these elevations affect their cooking.',
      votes: 0,
      topic: 'cooking',
      author: 'happyamy2016',
      created_at: '2018-05-27T03:32:28.514Z',
      comment_count: '5'
    },
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
        <p>Topic: {topic}</p>
        <p>Article: {body}</p>
        <span>
          Likes: {votes}
          Written by: {author}
          Date: {created_at}
          Comments: {comment_count}
        </span>
      </S.Article>
    );
  }
}

export default Article;

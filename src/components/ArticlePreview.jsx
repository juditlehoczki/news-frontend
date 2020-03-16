import React from 'react';

const ArticlePreview = props => {
  const {
    article_id,
    title,
    votes,
    topic,
    author,
    created_at,
    comment_count
  } = props.article;

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <p>Topic: {topic}</p>
        <span>
          Likes: {votes}
          Written by: {author}
          Date: {created_at}
          Comments: {comment_count}
        </span>
      </div>
    </div>
  );
};

export default ArticlePreview;

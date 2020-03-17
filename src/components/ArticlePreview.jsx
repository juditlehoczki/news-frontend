import React from "react";

import S from "./StyleComponents";

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
    <S.ArticlePreview>
      <S.ArticlePreviewTitle to={`/articles/${article_id}`}>
        {title}
      </S.ArticlePreviewTitle>
      <div>
        <p>Topic: {topic}</p>
        <span>
          Likes: {votes}
          Written by: {author}
          Date: {created_at}
          Comments: {comment_count}
        </span>
      </div>
    </S.ArticlePreview>
  );
};

export default ArticlePreview;

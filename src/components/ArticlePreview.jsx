import React from "react";
import { Link } from "@reach/router";

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
      <Link to={`/articles/topics/${topic}`}>
        <p>{topic}</p>
      </Link>
      <span>
        Votes: {votes}
        <Link to={`/articles/authors/${author}`}>Written by: {author}</Link>
        Date: {created_at}
        Comments: {comment_count}
      </span>
    </S.ArticlePreview>
  );
};

export default ArticlePreview;

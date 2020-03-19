import React from "react";
import moment from "moment";

import S from "./StyledComponents";

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
      <br />
      <S.ArticlePreviewDetails>
        Written by{" "}
        <S.WrittenByLink to={`/articles/authors/${author}`}>
          {author}
        </S.WrittenByLink>{" "}
        in <S.TopicLink to={`/articles/topics/${topic}`}>{topic}</S.TopicLink>{" "}
        on {moment(created_at).format("DD-MM-YYYY")}
      </S.ArticlePreviewDetails>
      <S.Reactions>
        <p>↑{votes}↓</p>
        <p>✎{comment_count}</p>
      </S.Reactions>
    </S.ArticlePreview>
  );
};

export default ArticlePreview;

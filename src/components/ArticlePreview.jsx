import React from "react";
import { Link } from "@reach/router";
import moment from "moment";

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
      <br />
      <S.ArticlePreviewDetails>
        Written by{" "}
        <S.ArticlePreviewWrittenBy to={`/articles/authors/${author}`}>
          {author}
        </S.ArticlePreviewWrittenBy>{" "}
        in{" "}
        <S.ArticlePreviewTopic to={`/articles/topics/${topic}`}>
          {topic}
        </S.ArticlePreviewTopic>{" "}
        on {moment(created_at).format("DD-MM-YYYY")}
      </S.ArticlePreviewDetails>
      <span>
        Votes: {votes}
        Comments:
        {comment_count}
      </span>
    </S.ArticlePreview>
  );
};

export default ArticlePreview;

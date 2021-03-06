import React from "react";
import moment from "moment";
import { Link } from "@reach/router";

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
      <div>
        <Link className="title" to={`/articles/${article_id}`}>
          {title}
        </Link>
        <br />
        Written by{" "}
        <S.WrittenByLink to={`/articles/authors/${author}`}>
          {author}
        </S.WrittenByLink>{" "}
        in <S.TopicLink to={`/articles/topics/${topic}`}>{topic}</S.TopicLink>{" "}
        on {moment(created_at).format("DD-MM-YYYY")}
      </div>
      <div className="reactions">
        <p>❤︎ {votes}</p>
        <p>✎ {comment_count}</p>
      </div>
    </S.ArticlePreview>
  );
};

export default ArticlePreview;

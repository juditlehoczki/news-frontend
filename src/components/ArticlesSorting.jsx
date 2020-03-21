import React from "react";

import S from "./StyledComponents";

const ArticlesSorting = ({ getArticles, topic, author }) => {
  const getArticlesWithQueries = e => {
    const queries = e.target.id.split(" ");
    getArticles({ sort_by: queries[0], order: queries[1], topic, author });
  };

  return (
    <S.NavBarElement>
      <button
        id="votes desc"
        onClick={e => {
          getArticlesWithQueries(e);
        }}
      >
        Hot{" "}
      </button>
      <button
        id="comment_count desc"
        onClick={e => {
          getArticlesWithQueries(e);
        }}
      >
        Talked About
      </button>
      <button
        id="created_at desc"
        onClick={e => {
          getArticlesWithQueries(e);
        }}
      >
        Newest
      </button>
    </S.NavBarElement>
  );
};

export default ArticlesSorting;

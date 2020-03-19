import React from "react";

const ArticlesSorting = ({ getArticles, topic, author }) => {
  const getArticlesWithQueries = e => {
    const queries = e.target.id.split(" ");
    getArticles({ sort_by: queries[0], order: queries[1], topic, author });
  };

  return (
    <div>
      <button
        id="created_at desc"
        onClick={e => {
          getArticlesWithQueries(e);
        }}
      >
        The Newest In!
      </button>
      <button
        id="votes desc"
        onClick={e => {
          getArticlesWithQueries(e);
        }}
      >
        Hottest{" "}
      </button>
      <button
        id="comment_count desc"
        onClick={e => {
          getArticlesWithQueries(e);
        }}
      >
        Most Talked About
      </button>
    </div>
  );
};

export default ArticlesSorting;

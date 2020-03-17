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
        Newest
      </button>
      <button
        id="created_at asc"
        onClick={e => {
          getArticlesWithQueries(e);
        }}
      >
        Oldest
      </button>
      <button
        id="votes asc"
        onClick={e => {
          getArticlesWithQueries(e);
        }}
      >
        Most Liked
      </button>
      <button
        id="comment_count desc"
        onClick={e => {
          getArticlesWithQueries(e);
        }}
      >
        Most Commented
      </button>
    </div>
  );
};

export default ArticlesSorting;

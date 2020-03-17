import React from "react";

const ArticlesSorting = props => {
  return (
    <div>
      <button
        onClick={event => {
          props.fetchAllArticles({
            sort_by: "created_at",
            order: "desc"
          });
        }}
      >
        Newest
      </button>
      <button
        onClick={event => {
          props.fetchAllArticles({
            sort_by: "created_at",
            order: "asc"
          });
        }}
      >
        Oldest
      </button>
      <button
        onClick={event => {
          props.fetchAllArticles({
            sort_by: "votes",
            order: "asc"
          });
        }}
      >
        Most Liked
      </button>
      <button
        onClick={event => {
          props.fetchAllArticles({
            sort_by: "comment_count",
            order: "desc"
          });
        }}
      >
        Most Commented
      </button>
    </div>
  );
};

export default ArticlesSorting;

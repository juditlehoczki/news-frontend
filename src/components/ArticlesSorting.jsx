import React from "react";

const ArticlesSorting = ({ getArticles, topic }) => {
  return (
    <div>
      <button
        onClick={event => {
          getArticles({
            sort_by: "created_at",
            order: "desc",
            topic: topic
          });
        }}
      >
        Newest
      </button>
      <button
        onClick={event => {
          getArticles({
            sort_by: "created_at",
            order: "asc",
            topic: topic
          });
        }}
      >
        Oldest
      </button>
      <button
        onClick={event => {
          getArticles({
            sort_by: "votes",
            order: "asc",
            topic: topic
          });
        }}
      >
        Most Liked
      </button>
      <button
        onClick={event => {
          getArticles({
            sort_by: "comment_count",
            order: "desc",
            topic: topic
          });
        }}
      >
        Most Commented
      </button>
    </div>
  );
};

export default ArticlesSorting;

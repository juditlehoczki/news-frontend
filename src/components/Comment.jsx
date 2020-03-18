import React from "react";

import Votes from "./Votes";

import S from "./StyleComponents";

const Comment = props => {
  const { body, votes, created_at, author, comment_id } = props.comment;
  return (
    <S.CommentTile>
      {body}
      {votes}
      {created_at}
      {author}
      <Votes type={"comments"} id={comment_id} votes={votes} />
    </S.CommentTile>
  );
};

export default Comment;

import React from "react";

import S from "./StyleComponents";

const Comment = props => {
  const { comment } = props;
  return (
    <S.CommentTile>
      {comment.body}
      {comment.votes}
      {comment.created_at}
      {comment.author}
    </S.CommentTile>
  );
};

export default Comment;

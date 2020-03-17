import React from "react";

import S from "./StyleComponents";

const Comment = props => {
  return <S.CommentTile>{props.comment.body}</S.CommentTile>;
};

export default Comment;

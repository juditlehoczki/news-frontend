import React, { Component } from "react";
import moment from "moment";

import Votes from "./Votes";
import { deleteComment } from "../api";

import S from "./StyledComponents";

class Comment extends Component {
  state = {
    msg: null
  };

  removeComment = () => {
    deleteComment(this.props.comment.comment_id).then(res => {
      this.setState({ msg: "Comment deleted." });
    });
  };

  render() {
    const { body, votes, created_at, author, comment_id } = this.props.comment;
    return (
      <>
        {this.state.msg ? (
          <p>{this.state.msg}</p>
        ) : (
          <S.CommentTile>
            Written by{" "}
            <S.WrittenByLink to={`/articles/authors/${author}`}>
              {author}
            </S.WrittenByLink>{" "}
            on {moment(created_at).format("DD-MM-YYYY")}
            <br />
            {body}
            <Votes type={"comments"} id={comment_id} votes={votes} />
            <button onClick={this.removeComment}>Delete</button>
          </S.CommentTile>
        )}
      </>
    );
  }
}

export default Comment;

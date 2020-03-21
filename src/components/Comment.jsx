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
    const { msg } = this.state;

    if (msg) {
      return <p>{msg}</p>;
    } else {
      return (
        <S.CommentTile>
          <div>
            By{" "}
            <S.WrittenByLink to={`/articles/authors/${author}`}>
              {author}
            </S.WrittenByLink>{" "}
            on {moment(created_at).format("DD-MM-YYYY")}
          </div>
          <p>{body}</p>
          <div>
            <Votes type={"comments"} id={comment_id} votes={votes} />
            {this.props.userLoggedIn === author && (
              <button className="deleteButton" onClick={this.removeComment}>
                Delete
              </button>
            )}
          </div>
        </S.CommentTile>
      );
    }
  }
}

export default Comment;

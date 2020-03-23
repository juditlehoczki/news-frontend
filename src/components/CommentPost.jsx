import React, { Component } from "react";

import S from "./StyledComponents";
import { postComment } from "../api";
import ErrorMsg from "./ErrorMsg";

class CommentPost extends Component {
  state = {
    comment: "",
    error: null
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    const { article_id, userLoggedIn, addNewComment } = this.props;
    const { comment } = this.state;
    e.preventDefault();
    postComment(article_id, {
      username: userLoggedIn,
      body: comment
    })
      .then(res => {
        addNewComment(res.data.comment);
        this.setState({ comment: "" });
      })
      .catch(error => {
        this.setState({ error: error.response });
      });
  };

  render() {
    const { userLoggedIn } = this.props;
    const { error, comment } = this.state;

    if (userLoggedIn) {
      return (
        <S.CommentPostContainer>
          Logged in as {userLoggedIn}.
          <form onSubmit={this.handleSubmit}>
            <label>
              <textarea
                onChange={this.handleChange}
                value={comment}
                type="text"
                placeholder="Leave a comment..."
                required
                rows="5"
              ></textarea>
            </label>
            <br />
            <button>Send</button>
            {error && (
              <ErrorMsg
                status={error.status}
                msg="You are not a registered user"
              />
            )}
          </form>
        </S.CommentPostContainer>
      );
    } else {
      return <p>Please log in to leave a comment. </p>;
    }
  }
}

export default CommentPost;

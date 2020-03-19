import React, { Component } from "react";

import S from "./StyledComponents";
import { postComment } from "../api";

class CommentPost extends Component {
  state = {
    comment: ""
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    const { article_id, userLoggedIn } = this.props;
    e.preventDefault();
    postComment(article_id, {
      username: userLoggedIn,
      body: this.state.comment
    })
      .then(res => {
        this.props.addNewComment(res.data.comment);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { userLoggedIn } = this.props;
    return (
      <div>
        {userLoggedIn ? (
          <S.CommentPostContainer>
            Logged in as {userLoggedIn}.
            <form onSubmit={this.handleSubmit}>
              <label>
                <S.CommentPostInput
                  onChange={this.handleChange}
                  value={this.state.comment}
                  type="text"
                  placeholder="Leave a comment..."
                ></S.CommentPostInput>
              </label>
              <button>Send</button>
            </form>
          </S.CommentPostContainer>
        ) : (
          <p>Please log in to leave a comment. </p>
        )}
      </div>
    );
  }
}

export default CommentPost;

import React, { Component } from "react";

import S from "./StyleComponents";

class CommentPost extends Component {
  state = {
    comment: ""
  };

  handleChange = e => {
    // console.log(e.target.value);
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log("HANDLESUBMIT>>>>>", e.target.value);
  };

  render() {
    // console.log("state.comment here>>>>", this.state.comment);
    return (
      <S.CommentPostContainer>
        <form onSubmit={this.handleSubmit}>
          <label>
            Logged in as:
            <input type="text" />
          </label>
          <label>
            Comment:
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
    );
  }
}

export default CommentPost;

import React, { Component } from "react";

import S from "./StyleComponents";

class CommentPost extends Component {
  state = {
    comment: ""
  };

  render() {
    return (
      <S.CommentPostContainer>
        <form>
          <label>
            Logged in as:
            <input type="text" />
          </label>
          <label>
            Comment:
            <S.CommentPostInput
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

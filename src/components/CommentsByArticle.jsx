import React, { Component } from "react";

import { fetchCommentsByArticleId } from "../api";
import Comment from "./Comment";
import CommentPost from "./CommentPost";

class CommentsByArticle extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  addNewComment = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  fetchComments = props => {
    fetchCommentsByArticleId(this.props.article_id)
      .then(({ data }) => {
        this.setState({ comments: data.comments, isLoading: false });
      })
      .catch(console.dir);
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    const { comments, isLoading } = this.state;
    return (
      <>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <CommentPost
              article_id={this.props.article_id}
              userLoggedIn={this.props.userLoggedIn}
              addNewComment={this.addNewComment}
            />
            {comments.map(comment => {
              return <Comment key={comment.comment_id} comment={comment} />;
            })}
          </div>
        )}
      </>
    );
  }
}

export default CommentsByArticle;

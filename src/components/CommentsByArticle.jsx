import React, { Component } from "react";

import { fetchCommentsByArticleId } from "../api";
import Comment from "./Comment";
import CommentPost from "./CommentPost";
import Pagination from "./Pagination";

class CommentsByArticle extends Component {
  state = {
    comments: [],
    isLoading: true,
    p: 1
  };

  addNewComment = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  fetchComments = props => {
    fetchCommentsByArticleId(this.props.article_id, { p: this.state.p })
      .then(({ data }) => {
        this.setState({
          comments: data.comments,
          isLoading: false
        });
      })
      .catch(console.dir);
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.p !== this.state.p) {
      this.fetchComments();
    }
  }

  changePage = num => {
    this.setState(currentState => {
      return { p: currentState.p + num };
    });
  };

  render() {
    const { comments, isLoading, p } = this.state;
    const { comment_count } = this.props;

    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <CommentPost
            article_id={this.props.article_id}
            userLoggedIn={this.props.userLoggedIn}
            addNewComment={this.addNewComment}
          />
          {comments.map(comment => {
            return (
              <Comment
                key={comment.comment_id}
                comment={comment}
                userLoggedIn={this.props.userLoggedIn}
              />
            );
          })}
          <Pagination
            changePage={this.changePage}
            p={p}
            total_count={comment_count}
          />
        </div>
      );
    }
  }
}

export default CommentsByArticle;

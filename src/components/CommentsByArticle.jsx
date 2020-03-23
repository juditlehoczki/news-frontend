import React, { Component } from "react";

import { fetchCommentsByArticleId } from "../api";
import Comment from "./Comment";
import CommentPost from "./CommentPost";
import ErrorMsg from "./ErrorMsg";
import Pagination from "./Pagination";

class CommentsByArticle extends Component {
  state = {
    comments: [],
    isLoading: true,
    error: null,
    p: 1
  };

  addNewComment = comment => {
    this.setState(currentState => {
      return { comments: [comment, ...currentState.comments] };
    });
  };

  fetchComments = props => {
    const { p } = this.state;
    const { article_id } = this.props;
    fetchCommentsByArticleId(article_id, { p })
      .then(({ data }) => {
        this.setState({
          comments: data.comments,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({ error: error.response, isLoading: false });
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps, prevState) {
    const { p } = this.state;
    if (prevState.p !== p) {
      this.fetchComments();
    }
  }

  changePage = num => {
    this.setState(currentState => {
      return { p: currentState.p + num };
    });
  };

  render() {
    const { comments, isLoading, error, p } = this.state;
    const { comment_count, article_id, userLoggedIn } = this.props;

    if (isLoading) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <CommentPost
            article_id={article_id}
            userLoggedIn={userLoggedIn}
            addNewComment={this.addNewComment}
          />
          {error && <ErrorMsg status={error.status} msg={error.data.msg} />}
          {comments.map(comment => {
            return (
              <Comment
                key={comment.comment_id}
                comment={comment}
                userLoggedIn={userLoggedIn}
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

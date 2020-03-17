import React, { Component } from "react";

import { fetchCommentsByArticleId } from "../api";
import Comment from "./Comment";

class CommentsByArticle extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  fetchComments = props => {
    console.log("CommentsByArticle>>>>>", this.props.article_id);
    fetchCommentsByArticleId(this.props.article_id)
      .then(({ data }) => {
        console.log(data.comments);
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

import React, { Component } from "react";

import ErrorMsg from "./ErrorMsg";
import S from "./StyledComponents";
import { fetchTopics, postArticle } from "../api";

class ArticlePost extends Component {
  state = {
    title: "",
    body: "",
    topic: "default",
    error: null,
    allTopics: [],
    successfullyPosted: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { userLoggedIn } = this.props;
    const { title, body, topic } = this.state;
    const article = {
      username: userLoggedIn,
      title,
      body,
      topic: topic.toLowerCase()
    };
    postArticle(article)
      .then(res => {
        this.setState(currentState => {
          return {
            title: "",
            body: "",
            topic: "default",
            error: null,
            successfullyPosted: true
          };
        });
      })
      .catch(error => {
        this.setState({ error: error.response });
      });
  };

  componentDidMount() {
    fetchTopics().then(({ data }) => {
      this.setState({ allTopics: data.topics });
    });
  }

  render() {
    const { userLoggedIn } = this.props;
    const {
      body,
      title,
      topic,
      error,
      allTopics,
      successfullyPosted
    } = this.state;

    return (
      <>
        {error && <ErrorMsg status={error.status} msg={error.data.msg} />}
        {successfullyPosted && "Your article has been successfully posted!"}
        <S.ArticlePostContainer>
          Author: {userLoggedIn}.
          <form onSubmit={this.handleSubmit}>
            <select
              name="topic"
              onChange={this.handleChange}
              value={topic}
              required
            >
              {" "}
              <option disabled value="default">
                Choose A Topic
              </option>
              {allTopics.map(topic => {
                const slug =
                  topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1);
                return (
                  <option key={slug} value={slug}>
                    {slug}
                  </option>
                );
              })}
            </select>
            <br />
            <textarea
              name="title"
              onChange={this.handleChange}
              value={title}
              type="text"
              placeholder="Title..."
              required
              rows="1"
            ></textarea>
            <textarea
              name="body"
              onChange={this.handleChange}
              value={body}
              type="text"
              placeholder="Article..."
              required
              rows="30"
            ></textarea>
            <br />
            <button>Post Article</button>
          </form>
        </S.ArticlePostContainer>
      </>
    );
  }
}

export default ArticlePost;

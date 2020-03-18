import React, { Component } from "react";
import { Link } from "@reach/router";

import { fetchTopics } from "../api";

import S from "./StyleComponents";

class Topics extends Component {
  state = {
    topics: []
  };

  getTopics = () => {
    fetchTopics().then(({ data }) => {
      this.setState({ topics: data.topics });
    });
  };

  componentDidMount() {
    this.getTopics();
  }

  render() {
    return (
      <S.TopicsContainer>
        {this.state.topics.map(topic => {
          return (
            <S.TopicSlug key={topic.slug} to={`/articles/topics/${topic.slug}`}>
              {topic.slug}
            </S.TopicSlug>
          );
        })}
      </S.TopicsContainer>
    );
  }
}

export default Topics;

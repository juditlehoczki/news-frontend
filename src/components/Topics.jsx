import React, { Component } from "react";
import { Link } from "@reach/router";

import { fetchTopics } from "../api";

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
      <div>
        {this.state.topics.map(topic => {
          return (
            <Link key={topic.slug} to={`/articles/topics/${topic.slug}`}>
              {topic.slug}
            </Link>
          );
        })}
      </div>
    );
  }
}

export default Topics;

import React, { Component } from "react";
import { Link } from "@reach/router";

import { fetchTopics } from "../api";

import S from "./StyledComponents";

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
      <S.NavBarElement>
        {this.state.topics.map(topic => {
          const slug = topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1);
          return (
            <Link key={slug} to={`/articles/topics/${slug.toLowerCase()}`}>
              <button>{slug}</button>
            </Link>
          );
        })}
      </S.NavBarElement>
    );
  }
}

export default Topics;

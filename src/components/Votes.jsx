import React, { Component } from "react";
import { patchArticle } from "../api";

class Votes extends Component {
  state = {
    currentVoteCount: 0
  };

  voteArticle = num => {
    patchArticle(this.props.article_id, { inc_votes: num })
      .then(res => console.log(res.data.article.votes))
      .catch(console.dir);
  };

  render() {
    console.log(this.props);
    const { article_id } = this.props;
    const { currentVoteCount } = this.state;
    return (
      <div>
        <button onClick={this.voteArticle(1)}>Up</button>
        Current vote count: {currentVoteCount}
        <button onClick={this.voteArticle(-1)}>Down</button>
      </div>
    );
  }
}

export default Votes;

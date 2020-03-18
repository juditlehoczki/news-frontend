import React, { Component } from "react";
import { patchArticle } from "../api";

class Votes extends Component {
  state = {
    voteChange: 0,
    error: false
  };

  voteArticle = num => {
    patchArticle(this.props.article_id, num).catch(error => {
      this.setState(currentState => {
        return {
          voteChange: currentState.voteChange - num,
          error: true
        };
      });
    });

    this.setState(currentState => {
      return {
        voteChange: currentState.voteChange + num,
        error: false
      };
    });
  };

  render() {
    const { votes } = this.props;
    const { voteChange, error } = this.state;
    return (
      <div>
        {error && <p>Oops, something's gone wrong...</p>}
        <button
          onClick={() => {
            this.voteArticle(1);
          }}
        >
          Up
        </button>
        Current vote count: {votes + voteChange}
        <button
          onClick={() => {
            this.voteArticle(-1);
          }}
        >
          Down
        </button>
      </div>
    );
  }
}

export default Votes;

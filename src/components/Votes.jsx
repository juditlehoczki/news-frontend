import React, { Component } from "react";
import { patchVote } from "../api";

class Votes extends Component {
  state = {
    voteChange: 0,
    error: false
  };

  updateVote = num => {
    patchVote(this.props.type, this.props.id, num).catch(error => {
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
            this.updateVote(1);
          }}
        >
          Up
        </button>
        Current vote count: {votes + voteChange}
        <button
          onClick={() => {
            this.updateVote(-1);
          }}
        >
          Down
        </button>
      </div>
    );
  }
}

export default Votes;

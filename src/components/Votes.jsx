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
          disabled={voteChange === 1}
          onClick={() => {
            this.updateVote(1);
          }}
        >
          ↑
        </button>
        {votes + voteChange}
        <button
          disabled={voteChange === -1}
          onClick={() => {
            this.updateVote(-1);
          }}
        >
          ↓
        </button>
      </div>
    );
  }
}

export default Votes;

import React, { Component } from "react";

class Player extends Component {
  render() {
    return (
      <div className="user_choice">
        <button className="fa-rock" onClick={e => this.props.onClick("rock")}>
          Rock
        </button>
        <button className="fa-paper" onClick={e => this.props.onClick("paper")}>
          Paper
        </button>
        <button className="scissors" onClick={e => this.props.onClick("scissors")}>
          Scissors
        </button>
      </div>
    );
  }
}

export default Player;

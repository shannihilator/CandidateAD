import React, { Component } from "react";
//Component to Show One Character's Frequency
class OneFrequency extends Component {
  render() {
    return (
      <div className="characters-div">
        <p className="character-count">
          Character: "<strong>{this.props.letter}</strong>"{" "}
          <span className="seperator">|</span>
          {"  "}
          Count: <strong>{this.props.number}</strong>
        </p>
      </div>
    );
  }
}
export default OneFrequency;

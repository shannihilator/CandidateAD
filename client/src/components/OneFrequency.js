import React, { Component } from "react";

class OneFrequency extends Component {
  constructor(props) {
    super(props);
  }
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

import React, { Component } from "react";

class OneFrequency extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <p>
          {this.props.letter} : {this.props.number}
        </p>
      </div>
    );
  }
}
export default OneFrequency;

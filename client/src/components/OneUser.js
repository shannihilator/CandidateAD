import React, { Component } from "react";

class OneUser extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }
  render() {
    return (
      <div className="person-details">
        <p>{this.props.userName}</p>
        <p>{this.props.jobTitle}</p>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default OneUser;

import React, { Component } from "react";

class OneUser extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }
  render() {
    return (
      <div className="person-details">
        <h3>
          <strong className="desc-item">Name:</strong> {this.props.userName}
        </h3>
        <p>
          <strong className="desc-item">Title:</strong> {this.props.jobTitle}
        </p>
        <p>
          <strong className="desc-item">Email: </strong>
          {this.props.email}
        </p>
      </div>
    );
  }
}

export default OneUser;

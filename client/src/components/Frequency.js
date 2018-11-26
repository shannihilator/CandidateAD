import React, { Component } from "react";

// Create a button that, when clicked, displays a frequency count of all the unique characters in all the email addresses of all the People you have access to, sorted by frequency count.

class Frequency extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.emails);
    let keys = Object.keys(this.props.emails);

    return (
      <div>
        <h1>TODO: SHOW FREQUENCY OF LETTERS FROM USERS</h1>
        <p>{keys}</p>
      </div>
    );
  }
}
export default Frequency;

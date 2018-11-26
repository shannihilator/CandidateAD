import React, { Component } from "react";
import OneFrequency from "./OneFrequency";

// Create a button that, when clicked, displays a frequency count of all the unique characters in all the email addresses of all the People you have access to, sorted by frequency count.

class Frequency extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.emails);
    //Loops over email and pulls out keys
    let entries = Object.entries(this.props.emails).map(k => {
      return <OneFrequency key={k[0]} letter={k[0]} number={k[1]} />;
    });

    return (
      <div>
        <h1>TODO: SHOW FREQUENCY OF LETTERS FROM USERS</h1>
        {entries}
      </div>
    );
  }
}
export default Frequency;

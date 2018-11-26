import React, { Component } from "react";
import OneFrequency from "./OneFrequency";
//Component to Hold All email Objects
class Frequency extends Component {
  render() {
    //Loops over email and pulls out entries
    let entries = Object.entries(this.props.emails).map(k => {
      return <OneFrequency key={k[0]} letter={k[0]} number={k[1]} />;
    });

    return (
      <div>
        <h1>FREQUENCY OF LETTERS FROM ALL USERS EMAILS</h1>
        {entries}
      </div>
    );
  }
}
export default Frequency;

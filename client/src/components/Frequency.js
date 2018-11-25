import React, { Component } from "react";
import axios from "axios";

class Frequency extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let everyEmail = this.props.people.map(singleEmail => {
      return (
        <p>{singleEmail.email_address}</p>
        // <OneUser key={singlePerson.id} email={singlePerson.email_address} />
      );
    });
    return (
      <div>
        <h1>TODO: SHOW FREQUENCY OF LETTERS FROM USERS</h1>
        {everyEmail}
      </div>
    );
  }
}
export default Frequency;

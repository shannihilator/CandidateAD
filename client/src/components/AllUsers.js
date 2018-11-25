import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import OneUser from "./OneUser";

class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: this.props
    };
  }

  render() {
    //Loops through people array and creates a component for each person
    let everyPerson = this.state.people.map(singlePerson => {
      return (
        <OneUser
          key={singlePerson.id}
          userName={singlePerson.display_name}
          jobTitle={singlePerson.title}
          email={singlePerson.email_address}
        />
      );
    });
    return (
      <div>
        <h1> ALL USERS</h1>
        <Link to={"/frequency"}>
          <button>Get Frequency</button>
        </Link>
        {everyPerson}
      </div>
    );
  }
}

export default AllUsers;

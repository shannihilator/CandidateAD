import React, { Component } from "react";
import { Link } from "react-router-dom";
import OneUser from "./OneUser";

//component to contain all users

class AllUsers extends Component {
  render() {
    // Loops through people array and creates a component for each person
    let everyPerson = this.props.people.map(singlePerson => {
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
          <button className="button">
            ***Click Here for Email Frequency***
          </button>
        </Link>
        <div className="people">{everyPerson}</div>
      </div>
    );
  }
}

export default AllUsers;

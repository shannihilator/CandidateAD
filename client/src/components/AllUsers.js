import React, { Component } from "react";
import axios from "axios";
import OneUser from "./OneUser";
class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }
  //Wait for data to come back from API before mounting and setting state
  componentDidMount() {
    axios
      .get("/api")
      .then(res => {
        console.log(res.data.data);
        this.setState({
          people: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
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
        <h1>DISPLAYS ALL USERS</h1>
        {everyPerson}
      </div>
    );
  }
}

export default AllUsers;

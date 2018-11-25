import React, { Component } from "react";
import axios from "axios";

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
    let onePerson = this.state.people.map(singlePerson => {
      return <p>{singlePerson.display_name}</p>;
    });
    return (
      <div>
        <h1>DISPLAYS ALL USERS</h1>
        <p>{onePerson}</p>
      </div>
    );
  }
}

export default AllUsers;

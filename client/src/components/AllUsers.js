import React, { Component } from "react";
import axios from "axios";

class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }
  componentDidMount() {
    axios
      .get("/api")
      .then(res => {
        console.log(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>DISPLAYS ALL USERS</h1>
      </div>
    );
  }
}

export default AllUsers;

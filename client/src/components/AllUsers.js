import React, { Component } from "react";
import axios from "axios";

class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
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
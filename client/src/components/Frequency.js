import React, { Component } from "react";
import axios from "axios";

class Frequency extends Component {
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
    return (
      <div>
        <h1>TODO: SHOW FREQUENCY OF LETTERS FROM USERS</h1>
      </div>
    );
  }
}
export default Frequency;

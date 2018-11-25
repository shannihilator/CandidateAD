import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

// COMPONENTS
import Navigation from "./components/Navigation";
import AllUsers from "./components/AllUsers";
import Frequency from "./components/Frequency";

// CSS
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route exact path="/" component={AllUsers} />
          <Route exact path="/frequency" component={Frequency} />
        </div>
      </Router>
    );
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
}

export default App;

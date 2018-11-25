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
      people: [],
      emailFrequency: {}
    };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route
            exact
            path="/"
            render={props => {
              return <AllUsers people={this.state.people} {...props} />;
            }}
          />
          <Route
            exact
            path="/frequency"
            render={props => {
              return <Frequency people={this.state.people} {...props} />;
            }}
          />
        </div>
      </Router>
    );
  }
  //Wait for data to come back from API before mounting and setting state
  componentDidMount() {
    axios
      .get("/api")
      .then(res => {
        // console.log(res.data.data);

        this.setState({
          people: res.data.data
        });
        this._splitEmails(this.state.people);
      })

      .catch(err => {
        console.log(err);
      });
  }

  //Splits off Emails to create a new array
  _splitEmails(peopleArr) {
    let everyEmail = peopleArr.map(singleEmail => {
      return singleEmail.email_address;
    });
    console.log(everyEmail);
    return this._countCharacterFrequency(everyEmail);
  }

  _countCharacterFrequency(emailArr) {
    let giantEmailString = emailArr.join("");
    console.log(giantEmailString);
  }
}

export default App;

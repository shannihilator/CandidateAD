import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

// COMPONENTS
import Navigation from "./components/Navigation";
import AllUsers from "./components/AllUsers";
import Frequency from "./components/Frequency";

// CSS
import "./App.css";

//MAIN COMPONENT
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      emailFrequency: []
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
              return (
                <Frequency
                  people={this.state.people}
                  emails={this.state.emailFrequency}
                  {...props}
                />
              );
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
        this.setState({
          people: res.data.data
        });
        let split = this._splitEmails(this.state.people);
        this.setState({
          emailFrequency: split
        });
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

    return this._countCharacterFrequency(everyEmail);
  }
  //Recieves the email array to find occurances of characters
  _countCharacterFrequency(emailArr) {
    //Step 1: Turn Array into one long string
    let giantEmailString = emailArr.join("");

    //Step 2: Split string into characters
    let characters = giantEmailString.split("");

    //Step 3: Iterate over array
    let characterCount = {};
    characters.forEach(c => {
      //if characterCount already conatains that character, add another to the count
      if (characterCount[c]) {
        characterCount[c]++;
      }
      //else set that character's value to 1
      else {
        characterCount[c] = 1;
      }
    });
    // console.log(characterCount);

    return characterCount;
  }
}

export default App;

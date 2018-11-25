import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// COMPONENTS
import Navigation from "./components/Navigation";
import AllUsers from "./components/AllUsers";
import Frequency from "./components/Frequency";

// CSS
import "./App.css";

class App extends Component {
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
}

export default App;

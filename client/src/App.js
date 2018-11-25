import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// COMPONENTS
import Navigation from "./components/Navigation";

// CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <h1>TODO: Mainbody</h1>
        </div>
      </Router>
    );
  }
}

export default App;

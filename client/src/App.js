import React, { Component } from "react";

// COMPONENTS
import Navigation from "./components/Navigation";

// CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <h1>TODO: Mainbody</h1>
      </div>
    );
  }
}

export default App;

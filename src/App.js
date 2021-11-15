import "./App.css";

import React, { Component } from "react";
import Circle from "./Circle";
class App extends Component {
  render() {
    return (
      <div>
        <header> Speedy Gonzales</header>
        <div className="main">
          <h3 className="score-display">Your Score is: </h3>
          <Circle />
          <div className="button-wrapper">
            <button>Start</button>
            <button>Stop</button>
          </div>
        </div>
        <footer>
          Copyright-2021, Made by:<span>Ouss</span>
        </footer>
      </div>
    );
  }
}

export default App;

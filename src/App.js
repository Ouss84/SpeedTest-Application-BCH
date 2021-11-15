import "./App.css";

import React, { Component } from "react";
import Circle from "./Circle";
class App extends Component {
  state = {
    circles: [
      { id: 1, color: "light-bleu" },
      { id: 2, color: "light-green" },
      { id: 3, color: "light-red" },
      { id: 4, color: "light-grey" },
    ],
  };
  render() {
    return (
      <div>
        <header> Speedy Gonzales</header>
        <div className="main">
          <h3 className="score-display">Your Score is: </h3>
          <div className="circles">
            {this.state.circles.map((c) => (
              <Circle key={c.id} color={c.color} id={c.id} />
            ))}
          </div>

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

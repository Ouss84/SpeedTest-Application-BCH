import "./App.css";

import React, { Component } from "react";
import Circle from "./Circle";
class App extends Component {
  state = {
    circles: [
      { id: 1, color: "lightblue" },
      { id: 2, color: "lightgreen" },
      { id: 3, color: "lightsalmon" },
      { id: 4, color: "rgb(136, 151, 165)" },
    ],
    score: 0,
  };
  clickHandler = () => {
    this.setState({ score: this.state.score + 10 });
  };
  resetHandler = () => {
    this.setState({ score: 0 });
  };
  render() {
    return (
      <div>
        <header> Speedy Gonzales</header>
        <div className="main">
          <h3 className="score-display">Your Score is: {this.state.score}</h3>
          <div className="circles">
            {this.state.circles.map((c) => (
              <Circle
                key={c.id}
                color={c.color}
                id={c.id}
                click={this.clickHandler}
              />
            ))}
          </div>

          <div className="button-wrapper">
            <button>Start</button>
            <button onClick={this.resetHandler}>Stop</button>
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

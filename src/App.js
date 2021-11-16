import "./App.css";

import { circles } from "./circles";
import React, { Component } from "react";
import Circle from "./Circle";
import Gameover from "./Gameover";
const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
class App extends Component {
  state = {
    score: 0,
    current: 0,
    gameOver: false,
  };
  timer = undefined;
  pace = 1500;
  clickHandler = () => {
    this.setState({ score: this.state.score + 10 });
  };
  nextCircle = () => {
    let nextActive;
    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);
    this.setState({ current: nextActive });
    this.pace *= 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace);
    console.log("active circle", this.state.current);
  };
  startHandler = () => {
    this.nextCircle();
  };
  stopHandler = () => {
    clearTimeout(this.timer);
    this.setState({
      gameOver: true,
    });
  };
  render() {
    return (
      <div>
        <header> Speedy Gonzales</header>
        <div className="main">
          <h3 className="score-display">Your Score is: {this.state.score}</h3>
          <div className="circles">
            {circles.map((c) => (
              <Circle
                key={c.id}
                color={c.color}
                id={c.id}
                click={this.clickHandler}
                active={this.state.current === c.id}
              />
            ))}
          </div>

          <div className="button-wrapper">
            <button onClick={this.startHandler}>Start</button>
            <button onClick={this.stopHandler}>Stop</button>
          </div>
          {this.state.gameOver && <Gameover score={this.state.score} />}
        </div>
        <footer>
          Copyright-2021, Made by:<span>Ouss</span>
        </footer>
      </div>
    );
  }
}

export default App;

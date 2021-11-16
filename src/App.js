import "./App.css";
import { circles } from "./circles";
import React, { Component } from "react";
import Circle from "./Circle";
import Gameover from "./Gameover";

import playGame from "./assets/sounds/play.ogg";
import gameOverSound from "./assets/sounds/gameOver.wav";
import goodClick from "./assets/sounds/laugh.wav";

let playSound = new Audio(playGame);
let endSound = new Audio(gameOverSound);
let good = new Audio(goodClick);
const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    gameOver: false,
    pace: 1500,
    rounds: 0,
    gameStart: false,
    gameStop: true,
  };
  timer = undefined;

  goodCLick = () => {
    if (good.paused) {
      good.play();
    } else {
      good.currentTime = 0;
    }
  };
  clickHandler = (id) => {
    this.goodCLick();

    // console.log("circle  clicked:", id);
    if (this.state.current !== id) {
      this.stopHandler();
      return;
    }
    this.setState({ score: this.state.score + 10, rounds: 0 });
  };

  nextCircle = () => {
    if (this.state.rounds >= 5) {
      this.stopHandler();
      return;
    }
    let nextActive;
    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);
    this.setState({
      current: nextActive,
      pace: this.state.pace * 0.95,
      rounds: this.state.rounds + 1,
    });

    this.timer = setTimeout(this.nextCircle, this.state.pace);
    console.log("active circle", this.state.current);
    console.log("round number", this.state.rounds);
  };

  startHandler = () => {
    playSound.play();
    this.nextCircle();
    this.setState({
      gameStart: true,
      gameStop: false,
    });
  };

  stopHandler = () => {
    playSound.pause();
    endSound.play();
    clearTimeout(this.timer);
    this.setState({
      gameOver: true,
      pace: 1500,
      gameStart: false,
      gameStop: true,
    });
  };

  closeHandler = () => {
    this.setState({
      gameOver: false,
      current: 0,
      score: 0,
      rounds: 0,
    });
  };

  render() {
    return (
      <div>
        <header>Feed Speedy !!!</header>
        <div className="main">
          <h3 className="score-display">Your Score is: {this.state.score}</h3>
          <div className="circles">
            {circles.map((c) => (
              <Circle
                key={c.id}
                color={c.color}
                id={c.id}
                click={() => this.clickHandler(c.id)}
                active={this.state.current === c.id}
                disabled={this.state.gameStart}
              />
            ))}
          </div>

          <div className="button-wrapper">
            <button disabled={this.state.gameStart} onClick={this.startHandler}>
              Start
            </button>
            <button disabled={this.state.gameStop} onClick={this.stopHandler}>
              Stop
            </button>
          </div>
          {this.state.gameOver && (
            <Gameover close={this.closeHandler} score={this.state.score} />
          )}
        </div>
        <footer>
          Copyright-2021, Made by:<span>Ouss</span>
        </footer>
      </div>
    );
  }
}

export default App;

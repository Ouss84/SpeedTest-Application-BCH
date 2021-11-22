import React from "react";

const Gameover = (props) => {
  return (
    <div className="game-over">
      <div className="gameover-card">
        <div className="button-over-wrapper">
          <button onClick={props.close}>X</button>
        </div>
        <h3>Game over</h3>

        <p> Your score was: {props.score}</p>
      </div>
    </div>
  );
};

export default Gameover;

import React from "react";
const closeHandler = () => {
  window.location.reload();
};
const Gameover = (props) => {
  return (
    <div className="game-over">
      <h3>Game over</h3>
      <p> Your score was: {props.score}</p>
      <button onClick={closeHandler}>X</button>
    </div>
  );
};

export default Gameover;

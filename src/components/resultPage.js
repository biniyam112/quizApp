import React from "react";

const PlayAgain = ({ score, playAgain }) => (
  <div className="score-board">
    <div className="score">You scorred {score} / 5</div>
    <button className="playBtn" onClick={playAgain}>
      Play again
    </button>
  </div>
);

export default PlayAgain;

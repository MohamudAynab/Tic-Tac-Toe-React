import React from "react";

function ResetButton({ handleResetGame }) {
  return (
    <button className="reset-button" onClick={handleResetGame}>
      New Game
    </button>
  );
}

export default ResetButton;

import React from "react";

function ResetButton({ onClick }) {
  return (
    <button className="reset-button" onClick={onClick}>
      New Game
    </button>
  );
}

export default ResetButton;

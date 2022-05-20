import React from "react";
import DifficultyBtn from "../components/DifficultyBtn";

function Difficulty() {
  return (
    <div className="grid place-content-center h-screen">
      <DifficultyBtn title="EASY" />
      <DifficultyBtn title="MEDIUM" />
      <DifficultyBtn title="HARD" />
    </div>
  );
}

export default Difficulty;

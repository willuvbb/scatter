import React from "react";
import Categories from "../components/Categories";
import ResetButton from "../components/ResetButton";
import GameControls from "../components/GameControls";

function Game() {
  return (
    <div className="game">
      <GameControls />
      <Categories />
      <ResetButton />
    </div>
  );
}

export default Game;

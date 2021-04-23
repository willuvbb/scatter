import React from "react";
import "./GameControls.css";
import SectionTitle from "./SectionTitle";
import GreyButton from "./GreyButton";

function GameControls() {
  return (
    <div className="GameControls">
      <div className="subcol green">
        <div className="subsubcol olive">
          <SectionTitle title="Letter" />
          <GreyButton name="Re-roll" />
          <span className="bigLetter">Q</span>
        </div>
      </div>
      <div className="subcol orange">
        <div className="subsubcol yellow">
          <SectionTitle title="Time" />
          <GreyButton name="Change" />
          <div className="timer">120</div>
        </div>
        <div className="subsubcol blue">1bii</div>
      </div>
    </div>
  );
}

export default GameControls;

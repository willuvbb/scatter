import React from "react";
import "./GreyButton.css";

function GreyButton(props) {
  function clickHandler() {
    console.log(props.name, "button clicked");
  }
  return (
    <div onClick={clickHandler} className="GreyButton">
      {props.name}
    </div>
  );
}

export default GreyButton;

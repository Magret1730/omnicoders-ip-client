import React from "react";
import "./Button.scss";

export default function Button({ type, onClick }) {
  const buttonText = {
    start: "Start",
    submit: "Submit",
    next: "Next",
  };

  return (
    <button className={`button button__${type}`} onClick={onClick}>
      {buttonText[type]}
    </button>
  );
}

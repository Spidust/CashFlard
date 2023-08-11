import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

function Front(props) {
  return (
    <div className="card__front">
      <div className="card-content">
        <div className="card-image">
          <img src={props.image} alt="Card-image" />
        </div>
        <div className="card-question">{props.question}</div>

        <input
          className="card-input"
          style={{ width: props.answer.length * 16 }}
          value={props.input}
          onChange={(e) => props.setInput(e.target.value.toLowerCase())}
        ></input>
      </div>

      <div className="flip-btn" onClick={() => props.setFlipped(true)}>
        <FaCheck />
      </div>
    </div>
  );
}

export default Front;

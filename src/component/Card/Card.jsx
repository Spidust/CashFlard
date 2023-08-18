import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import "../../assets/css/Card.css";
import Front from "./Front";
import Back from "./Back";

function Card() {
  const [isFlipped, setFlipped] = useState(false);
  const [input, setInput] = useState("");

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Front
        setFlipped={setFlipped}
        image="https://th.bing.com/th/id/R.096a73c51ccc0a207b1598212cfcbde8?rik=0lpi1uw0f2C98A&pid=ImgRaw&r=0"
        question="Gọi tên con này trong tiếng anh"
        answer={["1", "2", "3", "4"]}
        type="tn"
        input={input}
        setInput={setInput}
      />

      <Back
        setFlipped={setFlipped}
        image="https://th.bing.com/th/id/R.096a73c51ccc0a207b1598212cfcbde8?rik=0lpi1uw0f2C98A&pid=ImgRaw&r=0"
        question="Gọi tên con này trong tiếng anh"
        answer="leopard"
        input={input}
      />
    </ReactCardFlip>
  );
}

export default Card;

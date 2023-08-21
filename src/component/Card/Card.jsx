import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import "../../assets/css/Card.css";
import Front from "./Front";
import Back from "./Back";

function Card({ card, ...props }) {
	const [isFlipped, setFlipped] = useState(false);
	const [input, setInput] = useState("");

	return (
		<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
			<Front
				setFlipped={setFlipped}
				image="https://th.bing.com/th/id/R.096a73c51ccc0a207b1598212cfcbde8?rik=0lpi1uw0f2C98A&pid=ImgRaw&r=0"
				question={card.question}
				answer={card["answer-f"]}
				type={card.type}
				input={input}
				setInput={setInput}
			/>

			<Back
				setFlipped={setFlipped}
				image="https://th.bing.com/th/id/R.096a73c51ccc0a207b1598212cfcbde8?rik=0lpi1uw0f2C98A&pid=ImgRaw&r=0"
				question={card.question}
				answer={card["answer-b"]}
				input={input}
				setCurrent={props.setCurrent}
				length={props.length}
				setInput={setInput}
				index={props.index}
			/>
		</ReactCardFlip>
	);
}

/*
{
  "question": String,
  "answer-f": String || Array,
  "answer-b": String,
  "type": String,
  "image": String,
}

  {
    "question": "Gọi tên con này trong tiếng anh",
    "answer-f": "leopard",
    "answer-b": "leopard",
    "type": "tl",
    "image": "https://th.bing.com/th/id/R.096a73c51ccc0a207b1598212cfcbde8?rik=0lpi1uw0f2C98A&pid=ImgRaw&r=0",
  }

{
  "question": "Gọi tên con này trong tiếng việt",
  "answer-f": ["Báo", "Hổ", "Sư tử", "Ngựa vằn"],
  "answer-b": "Báo",
  "type": "tl",
  "image": "https://th.bing.com/th/id/R.096a73c51ccc0a207b1598212cfcbde8?rik=0lpi1uw0f2C98A&pid=ImgRaw&r=0",
}

*/

export default Card;

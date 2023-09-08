import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import "../../assets/css/Card.css";
import Front from "./Front";
import Back from "./Back";

function Card({ card, ...props }) {
	const [isFlipped, setFlipped] = useState(false);
	const [input, setInput] = useState("");
	return (
		<ReactCardFlip
			isFlipped={isFlipped}
			flipDirection="horizontal"
			flipSpeedBackToFront={0.4}
		>
			<Front
				setFlipped={setFlipped}
				image={card.image}
				question={card.question}
				answer={card["answer-f"]}
				type={card.type}
				input={input}
				setInput={setInput}
			/>

			<Back
				setFlipped={setFlipped}
				image={card.image}
				question={card.question}
				answer-f={card["answer-f"]}
				answer-b={card["answer-b"]}
				input={input}
				setIndexed={props.setIndexed}
				length={props.length}
				setInput={setInput}
				indexed={props.indexed}
				current={props.current}
				result={
					input == card["answer-b"] ||
					card["answer-f"][input] == card["answer-b"]
				}
			/>
		</ReactCardFlip>
	);
}

export default Card;

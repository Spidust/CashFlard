import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import randomizeAnswer from "../../utils/randomizeAnswer";

import "../../assets/css/Card.css";
import Front from "./Front";
import Back from "./Back";

function Card({ card, ...props }) {
	const [isFlipped, setFlipped] = useState(false);
	const [input, setInput] = useState("");

	return (
		<>
			{card && (
				<ReactCardFlip
					isFlipped={isFlipped}
					flipDirection="horizontal"
					flipSpeedBackToFront={-10}
					containerClassName={props.Change ? "change-action" : ""}
				>
					<Front
						setFlipped={setFlipped}
						image={card.image}
						question={card.question}
						answer={card["answer-f"]}
						type={card.type}
						input={input}
						setInput={setInput}
						sentence={card.sentence}
						lang={card.lang}
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
							card.type == "tl"
								? input == card["answer-b"]
								: card.type == "tn"
								? card["answer-f"].split(",")[input] ==
								  card["answer-b"]
								: false
						}
					/>
				</ReactCardFlip>
			)}
		</>
	);
}

export default Card;

import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import randomizeAnswer from "../../utils/randomizeAnswer";

import "../../assets/css/Card.css";
import Front from "./Front";
import Back from "./Back";

function Card({ card, ...props }) {
	const [isFlipped, setFlipped] = useState(false);
	const [input, setInput] = useState("");
	const [editedCard, setEditedCard] = useState();

	useEffect(() => {
		setEditedCard(card);
		if (card.type == "tn") {
			setEditedCard((prev) => {
				const copy = { ...prev };
				copy["answer-f"] = randomizeAnswer(prev["answer-f"]);
				return copy;
			});
		}
	}, [card]);
	return (
		<>
			{editedCard && (
				<ReactCardFlip
					isFlipped={isFlipped}
					flipDirection="horizontal"
					flipSpeedBackToFront={0}
					containerClassName={props.Change ? "change-action" : ""}
				>
					<Front
						setFlipped={setFlipped}
						image={editedCard.image}
						question={editedCard.question}
						answer={editedCard["answer-f"]}
						type={editedCard.type}
						input={input}
						setInput={setInput}
					/>

					<Back
						setFlipped={setFlipped}
						image={editedCard.image}
						question={editedCard.question}
						answer-f={editedCard["answer-f"]}
						answer-b={editedCard["answer-b"]}
						input={input}
						setIndexed={props.setIndexed}
						length={props.length}
						setInput={setInput}
						indexed={props.indexed}
						current={props.current}
						result={
							editedCard.type == "tl"
								? input == editedCard["answer-b"]
								: editedCard.type == "tn"
								? editedCard["answer-f"].split(",")[input] ==
								  editedCard["answer-b"]
								: false
						}
					/>
				</ReactCardFlip>
			)}
		</>
	);
}

export default Card;

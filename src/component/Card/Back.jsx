import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

function HandleNext(index, length) {
	let i = Math.floor(Math.random() * length);

	while (i === index) {
		i = Math.floor(Math.random() * length);
	}
	return i;
}

function Back(props) {
	return (
		<div className="card__back">
			<div className="card-content">
				<div className="card-image">
					<img src={props.image} alt="Card-image" />
				</div>
				<div className="card-question">{props.question}</div>

				<div className="card-answer">{props["answer-b"]}</div>

				<div className="card-result">
					{props.input == props["answer-b"] ||
					props["answer-f"][props.input] == props["answer-b"] ? (
						<div className="right">
							<FaCheck /> &nbsp; <h3>Bạn trả lời đúng rồi!</h3>
						</div>
					) : (
						<div className="wrong">
							<FaTimes /> &nbsp; <h3>Bạn trả lời sai mất rồi</h3>
						</div>
					)}
				</div>
			</div>
			<div
				className="flip-btn"
				onClick={() => {
					props.setFlipped(false);
					props.setInput("");
					props.setCurrent(HandleNext(props.index, props.length));
				}}
			>
				<FaCheck />
			</div>
		</div>
	);
}

export default Back;

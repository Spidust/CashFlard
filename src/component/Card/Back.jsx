import React, { useEffect } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

function Back(props) {
	const result =
		props.input == props["answer-b"] ||
		props["answer-f"][props.input] == props["answer-b"];

	return (
		<div className="card__back">
			<div className="card-content">
				<div className="card-image">
					<img src={props.image} alt="Card-image" />
				</div>
				<div className="card-question">{props.question}</div>

				<div className="card-answer">{props["answer-b"]}</div>

				<div className="card-result">
					{result ? (
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
					props.setIndexed(
						Array.from(
							new Set([
								...props.indexed,
								`${props.current}${result ? "d" : "s"}`,
							])
						)
					);
				}}
			>
				<FaCheck />
			</div>
		</div>
	);
}

export default Back;

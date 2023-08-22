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

				{props.type == "tl" ? (
					<input
						className="card-input-tl"
						style={{ width: props.answer.length * 16 }}
						value={props.input}
						onChange={(e) =>
							props.setInput(e.target.value.toLowerCase())
						}
					></input>
				) : (
					<div className="card-input-tn">
						{props.answer.map((item, index) => {
							return (
								<div
									className={
										"card-input-tn-item " +
										index +
										(index === props.input
											? " selecting"
											: "")
									}
									key={index}
									onClick={() => props.setInput(index)}
								>
									{item}
								</div>
							);
						})}
					</div>
				)}
			</div>

			<div
				className="flip-btn"
				onClick={() => {
					if (props.input !== "") props.setFlipped(true);
				}}
			>
				<FaCheck />
			</div>
		</div>
	);
}

export default Front;

import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import TextToSpeak from "../../core/TextToSpeech";

function Front(props) {
	let [sound, setSound] = useState();;

	useEffect(() => {
		if (props.sentence && props.lang) {
			setSound(new TextToSpeak(props.lang));
		} else {
			setSound(null)
		}
	}, [props]);

	useEffect(() => {
		if (sound) {
			sound.changeContent(props.sentence);
		}
	}, [sound]);
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
						style={{ "--character": props.answer.length }}
						value={props.input}
						onChange={(e) =>
							props.setInput(e.target.value.toLowerCase())
						}
					></input>
				) : props.type == "tn" ? (
					<div className="card-input-tn">
						{props.answer.split(",").map((item, index) => {
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
				) : (
					""
				)}
			</div>

			<div
				className="flip-btn"
				onClick={() => {
					if (props.input !== "") props.setFlipped(true);
				}}
			>
				<FaCheck />
				{sound && (
					<HiMiniSpeakerWave
						style={{ marginLeft: "10px" }}
						onClick={() => sound.speak()}
					/>
				)}
			</div>
		</div>
	);
}

export default Front;

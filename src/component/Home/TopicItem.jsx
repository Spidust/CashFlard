import React from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

function TopicItem(props) {
	return (
		<div
			className="topic-item hover-up"
			onClick={() => props.selectFunction(props.id)}
		>
			<h2 className="topic-title">{props.name}</h2>
			<div className="play-btn">
				<FaPlay />
			</div>
		</div>
	);
}

export default TopicItem;

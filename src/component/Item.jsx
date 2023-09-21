import React from "react";
import { FaPlay } from "react-icons/fa";

function Item(props) {
	return (
		<div
			className="item hover-underline"
			onClick={() => props.selectFunction(props.id)}
		>
			<h2 className="title">{props.name}</h2>
			<div className="play-btn">
				<FaPlay />
			</div>
		</div>
	);
}

export default Item;

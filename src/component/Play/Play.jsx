import React, { useState } from "react";
import Card from "./../Card/Card";
import "../../assets/css/play/Play.css";
import { useSelector } from "react-redux";

function Play() {
	const id = window.location.href.split("/")[4];
	const cards = useSelector((state) => state.cards[id]) || [];
	const [current, setCurrent] = useState(
		Math.floor(Math.random() * cards.length)
	);

	return (
		<div className="play">
			{cards.length > 0 ? (
				<Card
					card={cards[current]}
					setCurrent={setCurrent}
					index={current}
					length={cards.length}
				/>
			) : (
				"Bạn đã hoàn thành"
			)}
		</div>
	);
}

export default Play;

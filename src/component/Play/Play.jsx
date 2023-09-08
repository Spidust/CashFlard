import React, { useState, useEffect } from "react";
import Card from "./../Card/Card";
import "../../assets/css/play/Play.css";
import { useSelector } from "react-redux";
import Result from "./Result";

function HandleNext(indexed, length) {
	let i = Math.floor(Math.random() * length);

	while (indexed.includes(`${i}d`) || indexed.includes(`${i}s`)) {
		i = Math.floor(Math.random() * length);
	}

	return i;
}

function Play() {
	const id = window.location.href.split("/")[4];
	const cards = useSelector((state) => state.card[id]) || [];
	const [current, setCurrent] = useState(
		Math.floor(Math.random() * cards.length)
	);
	let [indexed, setIndexed] = useState([]);

	useEffect(() => {
		if (cards.length != indexed.length) {
			setTimeout(
				() => setCurrent(HandleNext(indexed, cards.length)),
				200
			);
		}
	}, [indexed]);
	return (
		<div className="play">
			{cards.length != indexed.length ? (
				<Card
					card={cards[current]}
					setCurrent={setCurrent}
					current={current}
					indexed={indexed}
					setIndexed={setIndexed}
					length={cards.length}
				/>
			) : (
				<Result
					indexed={indexed}
					length={cards.length}
					setIndexed={setIndexed}
				/>
			)}
		</div>
	);
}

export default Play;

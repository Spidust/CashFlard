import React, { useState, useEffect } from "react";
import Card from "./../Card/Card";
import "../../assets/css/play/Play.css";
import Result from "./Result";

import { useSearchParams } from "react-router-dom";
import { store } from "../../redux/store";

function duplicateItems(arr = [], numberOfRepetitions) {
	return arr.flatMap((i) =>
		Array.from({ length: numberOfRepetitions }).fill(i)
	);
}

function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;

	// While there remain elements to shuffle.
	while (currentIndex > 0) {
		// Pick a remaining element.
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// And swap it with the current element.
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	randomIndex = Math.floor(Math.random() * array.length);
	currentIndex = 0;

	[array[currentIndex], array[randomIndex]] = [
		array[randomIndex],
		array[currentIndex],
	];
	return array;
}
function Play(props) {
	const id = window.location.href.split("?")[0].split("/")[4];
	const [searchParams, setSearchParams] = useSearchParams();
	const duplicate = searchParams.get("duplicate");

	const [cards, setCards] = useState(
		duplicateItems(
			store.getState().card[id],
			duplicate > 0 ? Number(duplicate) : 1
		) || []
	);
	useEffect(() => {
		setCards(shuffle(cards));
		setCurrent(0);
	}, []);

	const [current, setCurrent] = useState(-1);
	const [indexed, setIndexed] = useState([]);

	const [Change, setChange] = useState(false);
	useEffect(() => {
		setCurrent(indexed.length);
	}, [indexed]);

	return (
		<div className="play flex items-center relative">
			{cards.length != indexed.length && current >= 0 ? (
				<Card
					Change={Change}
					card={cards[current]}
					current={current}
					indexed={indexed}
					setIndexed={(value) => {
						setIndexed(value);
						setChange(true);
						setTimeout(() => setChange(false), 600);
					}}
					length={cards.length}
				/>
			) : (
				<Result
					indexed={indexed}
					length={cards.length}
					setIndexed={setIndexed}
					active={props.active}
				/>
			)}
		</div>
	);
}

export default Play;

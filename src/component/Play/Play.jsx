import React, { useState, useEffect } from "react";
import Card from "./../Card/Card";
import "../../assets/css/play/Play.css";
import { useSelector } from "react-redux";
import Result from "./Result";

import { useSearchParams } from "react-router-dom";

function duplicateItems(arr = [], numberOfRepetitions) {
	return arr.flatMap((i) =>
		Array.from({ length: numberOfRepetitions }).fill(i)
	);
}

function HandleNext(indexed, length) {
	let i = Math.floor(Math.random() * length);

	while (indexed.includes(`${i}d`) || indexed.includes(`${i}s`)) {
		i = Math.floor(Math.random() * length);
	}

	return i;
}

function Play() {
	const id = window.location.href.split("?")[0].split("/")[4];
	const [searchParams, setSearchParams] = useSearchParams();
	const duplicate = searchParams.get("duplicate");

	const cards =
		useSelector((state) => {
			return duplicateItems(
				state.card[id],
				duplicate > 0 ? Number(duplicate) : 2
			);
		}) || [];

	const [current, setCurrent] = useState(
		Math.floor(Math.random() * cards.length)
	);
	let [indexed, setIndexed] = useState([]);

	const [Change, setChange] = useState(false);
	useEffect(() => {
		if (cards.length != indexed.length) {
			setCurrent(HandleNext(indexed, cards.length));
		}
	}, [indexed]);

	useEffect(() => {
		setChange(true);
		setTimeout(() => setChange(false), 300);
	}, [current]);
	return (
		<div className="play">
			{cards.length != indexed.length ? (
				<Card
					Change={Change}
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

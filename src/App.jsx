import "./App.css";
import ControlBar from "./component/ControlBar";
import TopicSets from "./component/Home/TopicSets";
import TopBar from "./component/TopBar";
import Menu from "./component/Home/Menu";
import Play from "./component/Play/Play";

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import LoadTopics from "./Utils/LoadTopics";
import { setTopics } from "./redux/TopicSlice";
import { setCards } from "./redux/CardSlice";
import LoadCards from "./Utils/LoadCards";

function App() {
	const [active, setActive] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		const topics = LoadTopics();
		const cards = LoadCards();
		for (const [key, value] of Object.entries(cards)) {
			dispatch(setCards({ id: key, cards: value }));
		}

		dispatch(setTopics(topics));
	}, []);
	return (
		<div className="app">
			<Router>
				<TopBar></TopBar>
				{active && <Menu quit={() => setActive(false)} />}

				<Routes>
					<Route path="/">
						<Route index element={<TopicSets />} exact></Route>
						<Route path="play/:topicId" element={<Play />}></Route>
					</Route>
				</Routes>
				<ControlBar openMenu={() => setActive(true)}></ControlBar>
			</Router>
		</div>
	);
}

export default App;

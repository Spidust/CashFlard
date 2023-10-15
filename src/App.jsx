import "./App.css";
import ControlBar from "./component/ControlBar";
import TopBar from "./component/TopBar";
import Menu from "./component/Home/Menu";
import Play from "./component/Play/Play";
import CategorieSet from "./component/Home/CategorieSet";

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopicSet from "./component/Categorie/TopicSet";
import LoadCategories from "./utils/State/LoadCategories";
import { useDispatch, useSelector } from "react-redux";

import LoadTopics from "./utils/State/LoadTopics";
import LoadCards from "./utils/State/LoadCards";

import SaveCards from "./utils/LocalStorage/SaveCards";
import SaveTopics from "./utils/LocalStorage/SaveTopics";
import SaveCategorie from "./utils/LocalStorage/SaveCategories";

function App() {
	const [active, setActive] = useState(false);
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	useEffect(() => {
		LoadCategories(dispatch);
		LoadTopics(dispatch);
		LoadCards(dispatch);
	}, []);

	useEffect(() => {
		SaveCards(state.card);
	}, [state.card]);

	useEffect(() => {
		SaveCategorie(state.categorie.value);
	}, [state.categorie.value]);

	useEffect(() => {
		SaveTopics(state.topic);
	}, [state.topic]);

	return (
		<div className="app">
			<Router>
				<TopBar></TopBar>
				<Menu active={active} quit={() => setActive(false)} />

				<Routes>
					<Route path="/">
						<Route index element={<CategorieSet />} exact></Route>
						<Route path=":categorieId">
							<Route element={<Play />} path={":topicId"}></Route>
							<Route element={<TopicSet />} index></Route>
						</Route>
					</Route>
				</Routes>
				<ControlBar openMenu={() => setActive(true)}></ControlBar>
			</Router>
		</div>
	);
}

export default App;

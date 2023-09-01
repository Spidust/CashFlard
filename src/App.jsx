import "./App.css";
import ControlBar from "./component/ControlBar";
import TopBar from "./component/TopBar";
import Menu from "./component/Home/Menu";
import Play from "./component/Play/Play";
import CategorieSet from "./component/Home/CategorieSet";

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopicSet from "./component/Categorie/TopicSet";
import LoadCategories from "./Utils/State/LoadCategories";
import { useDispatch, useSelector } from "react-redux";

import LoadTopics from "./Utils/State/LoadTopics";
import LoadCards from "./Utils/State/LoadCards";

import SaveCards from "./Utils/LocalStorage/SaveCards";
import SaveTopics from "./Utils/LocalStorage/SaveTopics";
import SaveCategorie from "./Utils/LocalStorage/SaveCategories";

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
		SaveCategorie(state.categorie.value);
		SaveTopics(state.topic);
	}, [state]);
	return (
		<div className="app">
			<Router>
				<TopBar></TopBar>
				{active && <Menu quit={() => setActive(false)} />}

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

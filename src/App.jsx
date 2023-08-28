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
import { useDispatch } from "react-redux";
import LoadTopics from "./Utils/State/LoadTopics";
import LoadCards from "./Utils/State/LoadCards";

function App() {
	const [active, setActive] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		LoadCategories(dispatch);
		LoadTopics(dispatch);
		LoadCards(dispatch);
	}, []);

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

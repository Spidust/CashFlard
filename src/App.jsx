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

function App() {
	const [active, setActive] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		LoadCategories(dispatch);
		LoadTopics(dispatch);
	}, []);
	return (
		<div className="app">
			<Router>
				<TopBar></TopBar>
				{active && <Menu quit={() => setActive(false)} />}

				<Routes>
					<Route path="/">
						<Route index element={<CategorieSet />} exact></Route>
						<Route path="play/:topicId" element={<Play />}></Route>
						<Route
							element={<TopicSet />}
							path=":categorieId/"
						></Route>
					</Route>
				</Routes>
				<ControlBar openMenu={() => setActive(true)}></ControlBar>
			</Router>
		</div>
	);
}

export default App;

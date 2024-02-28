import "./App.css";
import ControlBar from "./component/ControlBar";
import TopBar from "./component/TopBar";
import Menu from "./component/Home/Menu";
import Play from "./component/Play/Play";

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TopicSet from "./component/Categorie/TopicSet";
import CategorieSet from "./component/Home/CategorieSet";

import LoadCategories from "./utils/State/LoadCategories";
import LoadTopics from "./utils/State/LoadTopics";
import LoadCards from "./utils/State/LoadCards";

import SaveCards from "./utils/LocalStorage/SaveCards";
import SaveTopics from "./utils/LocalStorage/SaveTopics";
import SaveCategorie from "./utils/LocalStorage/SaveCategories";

import Form from "./component/Auth/Form";

import UserAPI from "./API/User";
import { setUser } from "./redux/UserSlice";

import ClearToken from "./utils/LocalStorage/ClearToken";
import LoadToken from "./utils/LocalStorage/LoadToken";
import SaveToken from "./utils/LocalStorage/SaveToken";
import ExamSets from "./component/Exam/ExamSets";

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

	//auth

	const auth = useSelector((state) => state.auth);

	useEffect(() => {
		LoadToken(dispatch);
	}, []);

	useEffect(() => {
		SaveToken(auth.token);
		if (auth.token) {
			UserAPI.get().then((result) => {
				if (Number.isInteger(result)) {
					dispatch(setUser(false));

					return ClearToken(dispatch);
				}
				dispatch(setUser(result));
			});
		} else {
			dispatch(setUser(false));
		}
	}, [auth]);
	return (
		<div className="app">
			<Router>
				<TopBar></TopBar>
				<Menu active={active} quit={() => setActive(false)} />

				<Routes>
					<Route path="/">
						<Route index element={<CategorieSet />}></Route>
						<Route path="/login" exact element={<Form />} />
						<Route
							path="/register"
							exact
							element={<Form register />}
						/>
						<Route
							path="/exam"
							exact
							element={<ExamSets data={[{ name: 1 }]} />}
						/>
						<Route path=":categorieId">
							<Route element={<Play />} path={":topicId"}></Route>
							<Route element={<TopicSet />} index></Route>
						</Route>
					</Route>
				</Routes>
				<ControlBar
					openMenu={() => setActive(true)}
					active={active}
				></ControlBar>
			</Router>
		</div>
	);
}

export default App;

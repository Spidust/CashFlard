import React from "react";

import "./App.css";
import ControlBar from "./component/ControlBar";
import TopBar from "./component/TopBar";
import Menu from "./component/Home/Menu";
import Play from "./component/Play/Play";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import SyncModal from "./component/Modal/SyncModal";

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
import SetToken from "./utils/State/SetToken";
import LoadToken from "./utils/LocalStorage/LoadToken";
import SaveToken from "./utils/LocalStorage/SaveToken";
import { setUser } from "./redux/UserSlice";

import GetUser from "./API/GetUser";
import GetBin from "./API/GetBin";
import UpdateBin from "./API/UpdateBin";

import { setCategories } from "./redux/CategorieSlice";

import { debounce } from "lodash";
import { FaBars } from "react-icons/fa";

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
	useEffect(() => {
		SetToken(LoadToken(), dispatch)
	}, []);

	useEffect(() => {
		if (state.user.token) {
			GetUser().then(user => {
				if (user) {
					dispatch(setUser(user));
				} else {
					setIsUsingUserData(false);
					SetToken("", dispatch);
				}
			});

		}
		SaveToken(state.user.token);
	}, [state.user.token])
	//sync with server
	const [isSync, setIsSync] = useState(true);
	const [isUsingUserData, setIsUsingUserData] = useState(false);

	const [Bin, setBin] = useState();

	const SyncWithServer = () => {
		dispatch(setCategories(JSON.parse(Bin.categorie)));

		SaveTopics(JSON.parse(Bin.topic));
		LoadTopics(dispatch);

		SaveCards(JSON.parse(Bin.card));
		LoadCards(dispatch);
		setIsUsingUserData(true);
	}

	const SyncWithClient = async () => {
		if (isUsingUserData && state.user.token) {
			const r = await UpdateBin(
				{ categorie: JSON.stringify(state.categorie.value), 
					topic: JSON.stringify(state.topic), 
					card: JSON.stringify(state.card) })
				console.log(state);
			if (r == 1) {
				alert("Lưu dữ liệu lên máy chủ thất bại");
			}
		}
	}
	useEffect(() => {
		if (state.user.token) {
			const checkBin = async () => {
				const bin = await GetBin();
				if (bin != 1) {
					let sync = true;
					if (bin.categorie != JSON.stringify(state.categorie.value)) {
						sync = false;
					}
					if (bin.topic != JSON.stringify(state.topic)) {
						sync = false;
					}
					if (bin.topic != JSON.stringify(state.topic)) {
						sync = false;
					}

					if (!sync) {
						setBin(bin);
					} else {
						setIsUsingUserData(true);
					}
					setIsSync(sync);
				}

			}
			checkBin();
		} else {
			setIsSync(true);
		}
	}, [state.user.token]);

	const debounced = React.useCallback(debounce(SyncWithClient, 500), [state.categorie.value, state.topic, state.card]);

	useEffect(debounced, [state.categorie.value, state.topic, state.card])
	return (
		<div className="app">
			<img src="/image/logo.png" alt="Logo" className="absolute top-[50%] left-[50%] w-[40%]" style={{
				transform: "translate(-50%, -50%)"
			}} />
			<p className="absolute bottom-[60px]">Hướng dẫn sử dụng trong <FaBars></FaBars></p>
			<Router>
				{!isSync && <SyncModal quit={() => setIsSync(true)} SyncWithServer={SyncWithServer} SyncWithClient={() => { setIsUsingUserData(true); SyncWithClient() }} />}
				<TopBar></TopBar>
				<Menu active={active} quit={() => setActive(false)} />

				<Routes>
						<Route path="login" element={<Login />}></Route>
						<Route path="Register" element={<Register />}></Route>

					<Route path="/">
						<Route index element={<CategorieSet />}></Route>

						<Route path=":categorieId">
							<Route
								element={<Play active={active} />}
								path={":topicId"}
							></Route>
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

import React, { useEffect } from "react";
import "../assets/css/TopBar.css";
import GetCategorieName from "../utils/State/GetCategorieName";
import { useLocation } from "react-router-dom";

function TopBar() {
	const location = useLocation();
	let id = location.pathname.split("/")[1];

	useEffect(() => {
		id = location.pathname.split("/")[1];
	}, [location]);
	return (
		<div className="top-bar bar">
			CASH FLARD - {id ? GetCategorieName(id) : "Trang chủ"}
		</div>
	);
}

export default TopBar;

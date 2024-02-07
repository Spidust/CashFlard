import React, { useEffect, useState } from "react";
import "../assets/css/TopBar.css";
import GetCategorieName from "../utils/State/GetCategorieName";
import { useLocation } from "react-router-dom";

function TopBar() {
	const location = useLocation();
	const [id, setId] = useState(location.pathname.split("/")[1]);

	useEffect(() => {
		setId(location.pathname.split("/")[1]);
	}, [location]);
	return (
		<div className="top-bar bar">
			<span>CASH FLARD - {id ? GetCategorieName(id) : "Trang chủ"}</span>
		</div>
	);
}

export default TopBar;

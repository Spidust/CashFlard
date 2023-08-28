import React from "react";
import { FaTimes } from "react-icons/fa";
import "../../assets/css/home/Menu.css";

function Menu(props) {
	return (
		<div className="menu">
			<FaTimes className="quit" onClick={props.quit}></FaTimes>

			<div className="menu__item">Liên hệ</div>
			<div className="menu__item">Github</div>
		</div>
	);
}

export default Menu;

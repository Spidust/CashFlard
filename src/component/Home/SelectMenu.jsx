import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function SelectMenu(props) {
	return (
		<div className="select-menu-overlay">
			<div className="select-menu">
				<FaTimes className="quit" onClick={props.quit}></FaTimes>
				<mt-4></mt-4>
				<Link className="select-menu__item" to={props.selecting}>
					{props.type == "categorie" ? "Enter" : "Play"}
				</Link>
				<div
					className="select-menu__item"
					onClick={() => props.setEdit(props.selecting)}
				>
					Rename
				</div>
				<div
					className="select-menu__item"
					onClick={() => props.setDelete(props.selecting)}
				>
					Delete
				</div>
			</div>
		</div>
	);
}

export default SelectMenu;

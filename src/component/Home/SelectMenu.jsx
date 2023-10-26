import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function SelectMenu(props) {
	const navigate = useNavigate();

	return (
		<div className="select-menu-overlay">
			<div className="select-menu">
				<FaTimes className="quit" onClick={props.quit}></FaTimes>
				<mt-4></mt-4>
				<div
					className="select-menu__item"
					onClick={() =>
						props.type == "categorie"
							? navigate("/" + props.selecting)
							: props.play(props.selecting)
					}
				>
					{props.type == "categorie" ? "Enter" : "Play"}
				</div>
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

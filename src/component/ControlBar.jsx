import { FaPlus, FaBars, FaHome } from "react-icons/fa";
import "../assets/css/ControlBar.css";
import { Link } from "react-router-dom";
import CreateModal from "./Modal/CreateModal";
import { useState } from "react";
import getType from "./../utils/getType";

function ControlBar(props) {
	const [creating, setCreating] = useState(false);

	return (
		<>
			<div className="control-bar bar">
				<div className="new-button" onClick={() => { 
					if (window.location.pathname.split("/")[1] != "login" && window.location.pathname.split("/")[1] != "register")
					setCreating(true) }}>
					<FaPlus />
				</div>
				<Link
					to={"/"}
					className={
						"home-btn hover-underline" +
						(props.active ? " menu-activated" : "")
					}
				>
					<FaHome />
				</Link>
				<div className="menu-btn" onClick={props.openMenu}>
					<FaBars />
				</div>
			</div>

			{creating && (
				<CreateModal
					quit={() => {setCreating(false)}}
					type={getType(window.location.href)}
				/>
			)}
		</>
	);
}

export default ControlBar;

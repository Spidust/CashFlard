import { FaPlus, FaBars, FaHome } from "react-icons/fa";
import "../assets/css/ControlBar.css";
import { Link } from "react-router-dom";
import CreateModal from "./Modal/CreateModal";
import { useState } from "react";

function ControlBar(props) {
	const [creating, setCreating] = useState(false);
	return (
		<>
			<div className="control-bar bar">
				<div className="new-button" onClick={() => setCreating(true)}>
					<FaPlus />
				</div>
				<Link to={"/"} className="home-btn hover-underline">
					<FaHome />
				</Link>
				<div className="menu-btn" onClick={props.openMenu}>
					<FaBars />
				</div>
			</div>

			{creating && (
				<CreateModal
					quit={() => setCreating(false)}
					type={
						window.location.href.split("?")[0].split("/")[3]
							? "topic"
							: "categorie"
					}
				/>
			)}
		</>
	);
}

export default ControlBar;

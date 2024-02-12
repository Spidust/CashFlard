import React, { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Item(props) {
	const navigate = useNavigate();
	const [active, setActive] = useState(false);

	return (
		<div className={"item hover-underline" + (active ? " active" : "")}>
			<div className="item-layer-2">
				<div
					className="item-button"
					onClick={() => {
						if (props.type == "categorie") navigate("/" + props.id);
						else {
							props.Select(props.id);
							props.play(props.id);
						}
					}}
				>
					{props.type == "categorie" ? "Vào" : "Học"}
				</div>
				<div
					className="item-button"
					style={{ background: "red" }}
					onClick={() => props.setDelete(props.id)}
				>
					Xóa
				</div>
				<div
					className="item-button"
					onClick={() => props.setEdit(props.id)}
				>
					Đổi tên
				</div>

				<div className="item-button" onClick={() => setActive(false)}>
					<FaTimes />
				</div>
			</div>
			<div className="item-layer-1" onClick={() => setActive(true)}>
				<h2 className="title">{props.name}</h2>
				<div className="play-btn">
					<FaPlay />
				</div>
			</div>
		</div>
	);
}

export default Item;

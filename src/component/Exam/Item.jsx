import React from "react";
import { FaTimes, FaPlay } from "react-icons/fa";

function Item(props) {
	const [active, setActive] = React.useState(false);

	return (
		<div className={"item hover-underline" + (active ? " active" : "")}>
			<div className="item-layer-2">
				<div className="item-button">Làm</div>
				<div
					className="item-button"
					style={{ background: "red" }}
					onClick={() => props.delete(props.id)}
				>
					Xóa
				</div>
				<div
					className="item-button"
					onClick={() => props.rename(props.id)}
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

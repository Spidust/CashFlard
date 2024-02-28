import React, { useState } from "react";
import { FaTimes, FaPlay } from "react-icons/fa";
function ExamSets(props) {
	const [active, setActive] = useState(false);

	return (
		<div className="exam-sets">
			{props.data &&
				props.data.map((i) => (
					<div
						className={
							"item hover-underline" + (active ? " active" : "")
						}
					>
						<div className="item-layer-2">
							<div className="item-button">Làm</div>
							<div
								className="item-button"
								style={{ background: "red" }}
							>
								Xóa
							</div>
							<div className="item-button">Đổi tên</div>

							<div
								className="item-button"
								onClick={() => setActive(false)}
							>
								<FaTimes />
							</div>
						</div>
						<div
							className="item-layer-1"
							onClick={() => setActive(true)}
						>
							<h2 className="title">{i.name}</h2>
							<div className="play-btn">
								<FaPlay />
							</div>
						</div>
					</div>
				))}
		</div>
	);
}

export default ExamSets;

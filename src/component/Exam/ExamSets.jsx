import React, { useState } from "react";
import { FaTimes, FaPlay } from "react-icons/fa";
import AddExam from "../../utils/State/AddExam";
import { useDispatch, useSelector } from "react-redux";
function ExamSets() {
	const [active, setActive] = useState(false);

	const data = useSelector((state) => state.exam.list);
	const dispatch = useDispatch();
	return (
		<div className="exam-sets">
			<button
				onClick={async () =>
					alert(
						await AddExam(
							"75e7077c-69ca-47a1-a774-e1ddc71c0954",
							dispatch
						)
					)
				}
			>
				abc
			</button>
			{data &&
				data.map((i) => (
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

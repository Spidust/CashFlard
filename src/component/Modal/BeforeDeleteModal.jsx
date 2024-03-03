import React from "react";
import { FaTimes } from "react-icons/fa";
import DeleteCategorie from "../../utils/State/DeleteCategorie";
import { useDispatch } from "react-redux";
import DeleteTopic from "../../utils/State/DeleteTopic";
import DeleteExam from "../../utils/State/DeleteExam";
import getType from "../../utils/getType";

function BeforeDeleteModal(props) {
	const dispatch = useDispatch();

	return (
		<div className="delete-modal modal">
			<FaTimes className="quit" onClick={() => props.quit(0)}></FaTimes>
			<h3>Bạn có chắc muốn xóa?</h3>
			<div
				className="delete-btn"
				onClick={() => {
					props.quit(0);
					switch (getType(window.location.href)) {
						case "categorie":
							DeleteCategorie(dispatch, props.id);
							break;
						case "exam":
							DeleteExam(props.id, dispatch);
							break;
						case "topic":
							DeleteTopic(
								dispatch,
								window.location.href
									.split("?")[0]
									.split("/")[3],
								props.id
							);
							break;
						default:
							break;
					}
				}}
			>
				Xóa
			</div>
		</div>
	);
}

export default BeforeDeleteModal;

import React from "react";
import { FaTimes } from "react-icons/fa";
import DeleteCategorie from "./../../Utils/State/DeleteCategorie";
import { useDispatch } from "react-redux";

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
					props.quitSelect(0);
					DeleteCategorie(dispatch, props.id);
				}}
			>
				Xóa
			</div>
		</div>
	);
}

export default BeforeDeleteModal;

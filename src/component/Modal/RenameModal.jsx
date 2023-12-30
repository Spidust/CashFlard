import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";

import RenameCategorie from "../../utils/State/RenameCategorie";
import RenameTopic from "../../utils/State/RenameTopic";

import Validate from "../../utils/Validate/Validate";

function HandleRenameCategorie(dispatch, newName, id, quit, quitSelect) {
	switch (Validate.CategorieName(newName)) {
		case 0:
			alert("Tên không được để trống");
			return;
		case 1:
			alert("Tên không được trùng");
			return;
		default:
			break;
	}
	RenameCategorie(dispatch, newName, id);
	quit();
	quitSelect();
}

function HandleRenameTopic(dispatch, newName, parentId, id, quit, quitSelect) {
	switch (Validate.TopicName(newName, parentId)) {
		case 0:
			alert("Tên không được trùng");
			return;
		case 1:
			alert("Tên không được để trống");
			return;
		default:
			break;
	}
	RenameTopic(dispatch, parentId, id, newName);
	quit();
	quitSelect();
}

function RenameModal(props) {
	const [input, setInput] = useState("");

	const dispatch = useDispatch();

	const type = window.location.href.split("?")[0].split("/")[3]
		? "topic"
		: "categorie";
	return (
		<div className="rename-modal modal">
			<FaTimes className="quit" onClick={() => props.quit(0)}></FaTimes>
			<label htmlFor="input">Tên mới: </label>
			<input
				type="text"
				id="input"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				className="rename-btn"
				onClick={() => {
					switch (type) {
						case "categorie":
							HandleRenameCategorie(
								dispatch,
								input,
								props.id,
								props.quit,
								props.quitSelect
							);
							break;
						case "topic":
							HandleRenameTopic(
								dispatch,
								input,
								window.location.href
									.split("?")[0]
									.split("/")[3],
								props.id,
								props.quit,
								props.quitSelect
							);
						default:
							break;
					}
				}}
			>
				Đổi tên
			</button>
		</div>
	);
}

export default RenameModal;

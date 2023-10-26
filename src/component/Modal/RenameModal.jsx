import { useState } from "react";
import RenameCategorie from "../../utils/State/RenameCategorie";
import { useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";
import RenameTopic from "../../utils/State/RenameTopic";

function HandleRenameCategorie(dispatch, newName, id, quit, quitSelect) {
	RenameCategorie(dispatch, newName, id);
	quit();
	quitSelect();
}

function HandleRenameTopic(dispatch, newName, parentId, id, quit, quitSelect) {
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

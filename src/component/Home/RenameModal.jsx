import { useState } from "react";
import RenameCategorie from "../../Utils/State/RenameCategorie";
import { useDispatch } from "react-redux";
import { FaTimes } from "react-icons/fa";

function HandleRenameCategorie(dispatch, newName, id, quit, quitSelect) {
	RenameCategorie(dispatch, newName, id);
	quit();
	quitSelect();
}

function RenameModal(props) {
	const [input, setInput] = useState("");

	const dispatch = useDispatch();

	const type = window.location.href.split("/")[3] ? "topic" : "categorie";
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

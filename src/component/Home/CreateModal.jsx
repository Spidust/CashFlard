import { useState } from "react";
import "../../assets/css/home/CreateModal.css";
import { FaTimes } from "react-icons/fa";
import NewCategorie from "../../Utils/State/NewCategorie";
import { useDispatch } from "react-redux";

function HandleCreateCategorie(dispatch, name) {
	NewCategorie(dispatch, name);
}
function CreateModal(props) {
	const dispatch = useDispatch();
	const [name, setName] = useState();

	return (
		<div className="create-modal">
			<FaTimes className="quit" onClick={props.quit}></FaTimes>
			<label htmlFor="name-input">Tên: </label>
			<input
				type="text"
				id="name-input"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button
				className="create-btn"
				onClick={() => HandleCreateCategorie(dispatch, name)}
			>
				Tạo
			</button>
		</div>
	);
}

export default CreateModal;

import { useState } from "react";
import "../../assets/css/home/CreateModal.css";
import { FaTimes } from "react-icons/fa";
import NewCategorie from "../../Utils/State/NewCategorie";
import { useDispatch } from "react-redux";
import { addTopics } from "../../Utils/State/AddTopics";

function HandleCreateCategorie(dispatch, name, quit) {
	NewCategorie(dispatch, name);
	quit();
}

function HandleAddTopic(parentId, data, dispatch, quit) {
	addTopics(data, parentId, dispatch);
	quit();
}
function CreateModal(props) {
	const dispatch = useDispatch();
	const [input, setInput] = useState();

	return (
		<div className="create-modal">
			<FaTimes className="quit" onClick={props.quit}></FaTimes>
			<label htmlFor="input">Tên: </label>
			<input
				type="text"
				id="input"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button
				className="create-btn"
				onClick={() => {
					if (props.type == "categorie")
						HandleCreateCategorie(dispatch, input, props.quit);
					else
						HandleAddTopic(
							window.location.href.split("/")[3],
							JSON.parse(input),
							dispatch,
							props.quit
						);
				}}
			>
				Tạo
			</button>
		</div>
	);
}

export default CreateModal;

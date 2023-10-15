import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import NewCategorie from "../../utils/State/NewCategorie";
import { useDispatch } from "react-redux";
import { addTopics } from "../../utils/State/AddTopics";

function HandleCreateCategorie(dispatch, name, quit) {
	NewCategorie(dispatch, name);
	quit();
}

function HandleAddTopic(parentId, data, dispatch, quit) {
	addTopics(data, parentId, dispatch);
	quit();
}

function WatchFileInput(setFileInput) {
	function onChange(event) {
		var reader = new FileReader();
		reader.onload = onReaderLoad;
		reader.readAsText(event.target.files[0]);
	}

	function onReaderLoad(event) {
		setFileInput(event.target.result);
	}

	document.getElementById("file-input").addEventListener("change", onChange);
}

function CreateModal(props) {
	const dispatch = useDispatch();
	const [input, setInput] = useState();
	useEffect(() => {
		if (document.getElementById("file-input")) {
			WatchFileInput(setInput);
		}
	}, []);
	return (
		<div className="create-modal modal">
			<FaTimes className="quit" onClick={props.quit}></FaTimes>
			<label htmlFor="input">
				{props.type == "categorie" ? "Tên" : "JSON"}:{" "}
			</label>
			<input
				type="text"
				id="input"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			{props.type == "categorie" ? (
				""
			) : (
				<input type="file" accept=".json" id="file-input"></input>
			)}
			<button
				className="create-btn"
				onClick={() => {
					if (props.type == "categorie")
						HandleCreateCategorie(dispatch, input, props.quit);
					else
						HandleAddTopic(
							window.location.href.split("?")[0].split("/")[3],
							JSON.parse(input),
							dispatch,
							props.quit
						);
				}}
			>
				{props.type == "categorie" ? "Tạo" : "Thêm"}
			</button>
		</div>
	);
}

export default CreateModal;

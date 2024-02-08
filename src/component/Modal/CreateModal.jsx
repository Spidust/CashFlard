import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import NewCategorie from "../../utils/State/NewCategorie";
import { useDispatch } from "react-redux";
import { addTopics } from "../../utils/State/AddTopics";
import Validate from "../../utils/Validate/Validate.js";

function HandleCreateCategorie(dispatch, name, quit) {
	switch (Validate.CategorieName(name)) {
		case 0:
			alert("Tên không được để trống");
			return;
		case 1:
			alert("Tên không được trùng");
			return;
		default:
			break;
	}
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
				{props.type == "categorie"
					? "Nhập tên bộ đề"
					: "Nhập dữ liệu của 4 đề"}
				:{" "}
			</label>
			<input
				type="text"
				id="input"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder={props.type == "categorie" ? "Tên" : "JSON"}
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
					else {
						try {
							const data = JSON.parse(input);
							HandleAddTopic(
								window.location.href
									.split("?")[0]
									.split("/")[3],
								data,
								dispatch,
								props.quit
							);
						} catch (e) {
							alert("Đầu vào không hợp lệ");
						}
					}
				}}
			>
				{props.type == "categorie" ? "Tạo" : "Thêm"}
			</button>
		</div>
	);
}

export default CreateModal;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function BeforePlayModal(props) {
	const [input, setInput] = useState(1);
	const navigate = useNavigate();

	return (
		<div className="create-modal modal">
			<FaTimes
				className="quit"
				onClick={() => {
					props.quit();
				}}
			></FaTimes>
			<label htmlFor="input">Số lần lặp lại mỗi thẻ</label>
			<input
				type="number"
				id="input"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>

			<button
				className="create-btn"
				onClick={() => {
					navigate(props.id + "?duplicate=" + input);
				}}
			>
				Học
			</button>
		</div>
	);
}

export default BeforePlayModal;

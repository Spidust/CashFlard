import React, { useState } from "react";
import Item from "./Item";
import "../assets/css/home/Topic.css";
import "../assets/css/Items.css";
import { Navigate } from "react-router-dom";
import BeforeDeleteModal from "./Modal/BeforeDeleteModal";
import RenameModal from "./Modal/RenameModal";
import BeforePlayModal from "./Modal/BeforePlayModal";

function Sets(props) {
	const [Delete, setDelete] = useState(0);
	const [Edit, setEdit] = useState(0);
	const [Play, setPlay] = useState(0);
	const [selecting, Select] = useState(0);

	return (
		<>
			{!props.data ? (
				<Navigate />
			) : (
				<>
					<div className="items">
						{props.data.map((topic, index) => {
							return (
								<Item
									key={topic.id}
									id={topic.id}
									name={topic.name}
									type={props.type}
									setDelete={setDelete}
									setEdit={setEdit}
									play={setPlay}
									Select={Select}
								/>
							);
						})}
					</div>

					{Delete ? (
						<BeforeDeleteModal quit={(i) => {setDelete(i); Select(i)}} id={Delete} />
					) : (
						""
					)}

					{Edit ? <RenameModal quit={(i) => {setEdit(i); Select(i)}} id={Edit} /> : ""}

					{Play ? (
						<BeforePlayModal quit={setPlay} id={selecting} />
					) : (
						""
					)}
				</>
			)}
		</>
	);
}

export default Sets;

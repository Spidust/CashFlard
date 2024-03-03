import React, { useState } from "react";
import AddExam from "../../utils/State/AddExam";
import { useDispatch, useSelector } from "react-redux";
import BeforeDeleteModal from "./../Modal/BeforeDeleteModal";

import Item from "./Item";
import RenameModal from "../Modal/RenameModal";
function ExamSets() {
	const data = useSelector((state) => state.exam.list);
	const dispatch = useDispatch();

	const [Delete, setDelete] = useState(false);
	const [rename, setRename] = useState(false);
	return (
		<div className="exam-sets">
			{Delete && (
				<BeforeDeleteModal id={Delete} quit={() => setDelete(false)} />
			)}

			{rename && (
				<RenameModal id={rename} quit={() => setRename(false)} />
			)}
			{data &&
				data.map((i) => (
					<Item
						name={i.name}
						id={i.id}
						delete={setDelete}
						rename={setRename}
					/>
				))}
		</div>
	);
}

export default ExamSets;

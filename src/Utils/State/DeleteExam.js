import { store } from "./../../redux/store";

import { removeExam } from "../../redux/ExamSlice";
export default async function DeleteExam(id, dispatch) {
	console.log(store.getState());
	const index = store.getState().exam.list.IndexOfObject("id", id);
	dispatch(removeExam(index, id));
}

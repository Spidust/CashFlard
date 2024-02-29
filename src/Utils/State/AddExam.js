import { store } from "./../../redux/store";

import { addExam } from "../../redux/ExamSlice";
import ExamAPI from "../../API/Exam";
export default async function AddExam(id, dispatch) {
	const exams = store.getState().exam.list;

	if (exams.IndexOfObject("id", id) > -1) {
		return "Bài kiểm tra đã tồn tại";
	}

	const exam = await ExamAPI.getOne(id);
	if (!Number.isInteger(exam)) {
		return dispatch(
			addExam({
				id,
				name: exam.name,
			})
		);
	}

	if (exam == 404) {
		return "Bài kiểm tra không tồn tại";
	} else return "Đã có lỗi xảy ra";
}

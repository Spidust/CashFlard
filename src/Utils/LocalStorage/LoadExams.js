import Validate from "../../core/Validate";
import { setExams } from "../../redux/ExamSlice";

export default function LoadExams(dispatch) {
	try {
		const exams = JSON.parse(window.localStorage.getItem("exams"));
		dispatch(setExams(Validate.ExamsStructure(exams)));
	} catch (e) {
		return [];
	}
}

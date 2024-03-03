export default function SaveExams(exams) {
	window.localStorage.setItem("exams", JSON.stringify(exams));
}

import { renameExam } from "../../redux/ExamSlice";
import { store } from "../../redux/store";

export default function RenameExam(id, newName, dispatch) {
	const index = store.getState().exam.list.IndexOfObject("id", id);
	if (newName.length) dispatch(renameExam({ index, newName }));
	else alert("Tên không được để trống!");
}

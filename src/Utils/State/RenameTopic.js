import { renameTopic } from "../../redux/TopicSlice";
import { store } from "./../../redux/store";
export default function RenameTopic(dispatch, parentId, id, newName) {
	const state = store.getState();
	const topic = state.topic[parentId];
	console.log(parentId, id, newName);
	let index;
	for (let i = 0; i < topic.length; i++) {
		if (topic[i].id == id) {
			index = i;
			break;
		}
	}

	if (index >= 0 && newName.length > 0) {
		dispatch(
			renameTopic({
				index,
				newName,
				parentId,
			})
		);
	}
}

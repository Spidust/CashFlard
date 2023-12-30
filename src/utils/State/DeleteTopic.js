import { removeTopicCard } from "../../redux/CardSlice";
import { removeTopic } from "../../redux/TopicSlice";
import { store } from "./../../redux/store";

export default function DeleteTopic(dispatch, parentId, id) {
	const state = store.getState();
	const topic = state.topic[parentId];
	let index = -1;

	for (let i = 0; i < topic.length; i++) {
		if (topic[i].id == id) {
			index = i;
			break;
		}
	}

	if (index >= 0) {
		dispatch(removeTopicCard(id));
		dispatch(removeTopic({ parentId, index }));
	}
}

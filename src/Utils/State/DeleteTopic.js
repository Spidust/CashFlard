import { removeTopicCard } from "../../redux/CardSlice";
import { removeTopic } from "../../redux/TopicSlice";
import { store } from "./../../redux/store";

export default function DeleteTopic(dispatch, parentId, id) {
	const state = store.getState();
	const topic = state.topic[parentId];
	let index;

	for (let i = 0; i < topic.length; i++) {
		if (topic[i].id == id) {
			index = id;
			break;
		}
	}

	if (index) {
		dispatch(removeTopicCard(id));
		dispatch(removeTopic({ parentId, index }));
	}
}

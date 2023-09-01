import { addCard } from "../../redux/CardSlice";
import { addTopic } from "../../redux/TopicSlice";
import SaveCards from "./../LocalStorage/SaveCards";
import SaveTopics from "./../LocalStorage/SaveTopics";
import { store } from "./../../redux/store";

export function addTopics(data, parentId, dispatch) {
	for (const [key, value] of Object.entries(data)) {
		const id = crypto.randomUUID();
		dispatch(
			addTopic({
				id: parentId,
				Topic: {
					id,
					name: key,
				},
			})
		);

		for (const i of value) {
			dispatch(addCard({ id, card: i }));
		}
	}
}

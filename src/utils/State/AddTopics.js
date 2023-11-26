import { addCard } from "../../redux/CardSlice";
import { addTopic } from "../../redux/TopicSlice";
import { v4 as uuidv4 } from "uuid";

export function addTopics(data, parentId, dispatch) {
	for (const [key, value] of Object.entries(data)) {
		const id = uuidv4();
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

import { addCard } from "../../redux/CardSlice";
import { addTopic } from "../../redux/TopicSlice";
import { v4 as uuidv4 } from "uuid";
import ValidateTopicName from "../Validate/ValidateTopicName";

export function addTopics(data, parentId, dispatch) {
	for (const [key, value] of Object.entries(data)) {
		const id = uuidv4();

		let validatedNameResult = ValidateTopicName(key, parentId);
		let name = key;
		let i = 0;

		while (!validatedNameResult) {
			i += 1;
			name = `${key} ${i}`;
			validatedNameResult = ValidateTopicName(name, parentId);
		}

		dispatch(
			addTopic({
				id: parentId,
				Topic: {
					id,
					name: name,
				},
			})
		);

		for (const i of value) {
			dispatch(addCard({ id, card: i }));
		}
	}
}

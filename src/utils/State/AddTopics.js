import { addCard } from "../../redux/CardSlice";
import { addTopic } from "../../redux/TopicSlice";
import { v4 as uuidv4 } from "uuid";
import Validate from "../Validate/Validate";

export function addTopics(data, parentId, dispatch) {
	for (const [key, value] of Object.entries(data)) {
		let validateJsonStruct = true;
		for (let i of value)
			if (!Validate.JSONStructure(i)) {
				alert("Đề " + key + " bị lỗi");
				validateJsonStruct = false;
				break;
			}

		if (validateJsonStruct) {
			const id = uuidv4();

			let validatedNameResult = Validate.TopicName(key, parentId);
			let name = key;
			let i = 0;

			while (!validatedNameResult) {
				i += 1;
				name = `${key} ${i}`;
				validatedNameResult = Validate.TopicName(name, parentId);
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
}

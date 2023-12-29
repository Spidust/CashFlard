import { store } from "../../redux/store";

export default function ValidateTopicName(name, parentId) {
	if (!name || !parentId) {
		return 1;
	}

	const topic = store.getState().topic[parentId];

	for (let value of topic) {
		if (value.name == name) {
			return 0;
		}
	}

	return 2;
}

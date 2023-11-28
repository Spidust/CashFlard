import { store } from "../../redux/store";

export default function ValidateTopicName(name, parentId) {
	if (!name || !parentId) {
		return true;
	}

	const topic = store.getState().topic[parentId];

	for (let value of topic) {
		if (value.name == name) {
			return false;
		}
	}

	return true;
}

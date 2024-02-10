import { store } from "../redux/store";

export default class Validate {
	static CategorieName(name) {
		//Check Độ dài
		if (!name || name.length == 0) {
			return 0;
		}
		//Check trùng tên
		const categorie = store.getState().categorie.value;

		if (categorie) {
			for (let i of categorie) {
				if (i.name == name) return 1;
			}
		}

		return 2;
	}

	static TopicName(name, parentId) {
		if (!name || !parentId) {
			return 1;
		}

		const topic = store.getState().topic[parentId];

		if (topic) {
			for (let value of topic) {
				if (value.name == name) {
					return 0;
				}
			}
		}

		return 2;
	}

	static JSONStructure(json) {
		if (
			!json.question ||
			!json.image ||
			!json["answer-f"] ||
			!json["answer-b"] ||
			!json.type
		) {
			return false;
		}
		return true;
	}
}

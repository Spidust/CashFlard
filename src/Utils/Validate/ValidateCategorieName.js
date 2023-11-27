import { store } from "./../../redux/store";
export default function ValidateCategorieName(name) {
	//Check Độ dài
	if (!name || name.length == 0) {
		return 0;
	}
	//Check trùng tên
	const categorie = store.getState().categorie.value;

	for (let i of categorie) {
		if (i.name == name) return 1;
	}

	return 2;
}

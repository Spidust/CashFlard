import { store } from "../../redux/store";

export default function (id) {
	const categorie = store.getState().categorie.value;

	for (let i of categorie) {
		if (i.id == id) {
			return i.name;
		}
	}
	return `Hãy về trang chủ`;
}

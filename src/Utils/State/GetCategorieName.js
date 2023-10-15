import { store } from "../../redux/store";

export default function (id) {
	const categorie = store.getState().categorie.value;

	for (let i in categorie) {
		if (i.id == id) {
			return i.name;
		}
	}
	return `404 not found, hãy về trang chủ`;
}

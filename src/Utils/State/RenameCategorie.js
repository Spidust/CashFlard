import { renameCategorie } from "../../redux/CategorieSlice";
import { store } from "../../redux/store";

export default function RenameCategorie(dispatch, newName, id) {
	const state = store.getState();
	const categorie = state.categorie.value;
	let index;

	for (let i = 0; i < categorie.length; i++) {
		if (categorie[i].id == id) {
			index = i;
			break;
		}
	}
	if (index >= 0) {
		dispatch(renameCategorie({ index, newName }));
	}
}

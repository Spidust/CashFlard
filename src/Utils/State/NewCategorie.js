import { addCategorie } from "../../redux/CategorieSlice";
import SaveCategorie from "../LocalStorage/SaveCategories";
import { store } from "../../redux/store";

export default function NewCategorie(dispatch, name) {
	if (name) {
		dispatch(addCategorie({ id: crypto.randomUUID(), name }));
		const state = store.getState();
		SaveCategorie(state.categorie.value);
	}
}

import { addCategorie } from "../../redux/CategorieSlice";
export default function NewCategorie(dispatch, name) {
	if (name) {
		dispatch(addCategorie({ id: crypto.randomUUID(), name }));
	}
}

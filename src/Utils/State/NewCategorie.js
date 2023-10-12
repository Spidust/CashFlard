import { addCategorie } from "../../redux/CategorieSlice";
import { v4 as uuidv4 } from "uuid";

export default function NewCategorie(dispatch, name) {
	if (name) {
		dispatch(addCategorie({ id: uuidv4(), name }));
	}
}

import { setCategories } from "../../redux/CategorieSlice";
import LoadLSCategorie from "../LocalStorage/LoadCategories";

export default function LoadCategories(dispatch) {
	const categories = LoadLSCategorie();

	dispatch(setCategories(categories));
}

import { removeCategorie } from "../../redux/CategorieSlice";
import { removeCategorieTopic } from "../../redux/TopicSlice";
import { removeTopicCard } from "../../redux/CardSlice";
import { store } from "../../redux/store";

export default function DeleteCategorie(dispatch, id) {
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
		dispatch(removeCategorie(index));
		if (state.topic[id]) {
			for (let i of state.topic[id]) {
				dispatch(removeTopicCard(i.id));
			}
		}
		dispatch(removeCategorieTopic(id));
	}
}

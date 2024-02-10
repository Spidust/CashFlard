import LoadLSCards from "../LocalStorage/LoadCards";
import { setCards } from "../../redux/CardSlice";
export default function LoadCards(dispatch) {
	const cards = LoadLSCards();
	for (const [key, value] of Object.entries(cards)) {
		dispatch(setCards({ id: key, cards: value }));
	}
}

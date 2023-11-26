import { setTopics } from "../../redux/TopicSlice";
import LoadTopics from "../LocalStorage/LoadTopics";

export default function LoadCategories(dispatch) {
	const Topics = LoadTopics();
	for (const [key, value] of Object.entries(Topics)) {
		dispatch(setTopics({ id: key, Topics: value }));
	}
}

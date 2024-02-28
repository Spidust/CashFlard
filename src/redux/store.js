import { configureStore } from "@reduxjs/toolkit";
import CategorieSlice from "./CategorieSlice";
import CardSlice from "./CardSlice";
import TopicSlice from "./TopicSlice";
import AuthSlice from "./AuthSlice";
import UserSlice from "./UserSlice";
import ExamSlice from "./ExamSlice";

export const store = configureStore({
	reducer: {
		categorie: CategorieSlice,
		card: CardSlice,
		topic: TopicSlice,
		auth: AuthSlice,
		user: UserSlice,
		exam: ExamSlice,
	},
});

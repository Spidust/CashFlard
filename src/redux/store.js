import { configureStore } from "@reduxjs/toolkit";
import TopicSlice from "./TopicSlice";
import CardSlice from "./CardSlice";

export const store = configureStore({
	reducer: {
		topics: TopicSlice,
		cards: CardSlice,
	},
});

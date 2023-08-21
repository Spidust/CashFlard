import { createSlice } from "@reduxjs/toolkit";

export const TopicSlice = createSlice({
	name: "topic",
	initialState: {
		value: [],
	},
	reducers: {
		setTopics: (state, action) => {
			state.value = [...action.payload];
		},
		addTopic: (state, action) => {
			state.value.push(action.payload);
		},
		removeTopic: (state, action) => {
			state.value.splice(action.payload, 1);
		},
		updateTopic: (state, action) => {
			state.value[state.indexOf(action.payload.id)] =
				action.payload.topic;
		},
	},
});

export const { setTopics, addTopic, removeTopic, updateTopic } =
	TopicSlice.actions;

export default TopicSlice.reducer;

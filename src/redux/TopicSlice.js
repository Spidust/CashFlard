import { createSlice } from "@reduxjs/toolkit";

const TopicSlice = createSlice({
	name: "Topic",
	initialState: {},
	reducers: {
		setTopics: (state, action) => {
			state[action.payload.id] = action.payload.Topics;
		},
		addTopic: (state, action) => {
			if (state[action.payload.id]) {
				state[action.payload.id] = [
					...state[action.payload.id],
					action.payload.Topic,
				];
			} else {
				state[action.payload.id] = [action.payload.Topic];
			}
		},
		removeTopic: (state, action) => {
			state[action.payload.parentId].splice(action.payload.index, 1);
		},
		removeCategorieTopic: (state, action) => {
			delete state[action.payload];
		},
		updateTopic: (state, action) => {
			state[action.payload.id][
				state[action.payload.id].indexOf(action.payload.TopicId)
			] = action.payload.Topic;
		},
	},
});
export const {
	setTopics,
	addTopic,
	removeTopic,
	removeCategorieTopic,
	updateTopic,
} = TopicSlice.actions;

export default TopicSlice.reducer;

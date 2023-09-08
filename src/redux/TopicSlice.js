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
		renameTopic: (state, action) => {
			state[action.payload.parentId][action.payload.index].name =
				action.payload.newName;
		},
	},
});
export const {
	setTopics,
	addTopic,
	removeTopic,
	removeCategorieTopic,
	renameTopic,
} = TopicSlice.actions;

export default TopicSlice.reducer;

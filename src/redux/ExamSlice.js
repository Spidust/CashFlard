import { createSlice } from "@reduxjs/toolkit";

const examSlice = createSlice({
	name: "exam",
	initialState: {
		list: [],
	},
	reducers: {
		setExams: (state, action) => {
			state.value = [...action.payload];
		},
		addExam: (state, action) => {
			state.value.push(action.payload);
		},
		removeExam: (state, action) => {
			state.value.splice(action.payload, 1);
		},
		renameExam: (state, action) => {
			state.value[action.payload.index].name = action.payload.newName;
		},
	},
});

export const { setExams, addExam, removeExam, renameExam } = examSlice.actions;

export default examSlice.reducer;

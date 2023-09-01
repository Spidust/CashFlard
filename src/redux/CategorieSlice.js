import { createSlice } from "@reduxjs/toolkit";

export const CategorieSlice = createSlice({
	name: "Categorie",
	initialState: {
		value: [],
	},
	reducers: {
		setCategories: (state, action) => {
			state.value = [...action.payload];
		},
		addCategorie: (state, action) => {
			state.value.push(action.payload);
		},
		removeCategorie: (state, action) => {
			state.value.splice(action.payload, 1);
		},
		renameCategorie: (state, action) => {
			state.value[action.payload.index].name = action.payload.newName;
		},
	},
});

export const { setCategories, addCategorie, removeCategorie, renameCategorie } =
	CategorieSlice.actions;

export default CategorieSlice.reducer;

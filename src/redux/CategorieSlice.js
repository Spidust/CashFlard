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
		updateCategorie: (state, action) => {
			state.value[state.indexOf(action.payload.id)] =
				action.payload.Categorie;
		},
	},
});

export const { setCategories, addCategorie, removeCategorie, updateCategorie } =
	CategorieSlice.actions;

export default CategorieSlice.reducer;

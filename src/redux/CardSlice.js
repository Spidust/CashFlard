import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
	name: "card",
	initialState: {},
	reducers: {
		setCards: (state, action) => {
			state[action.payload.id] = action.payload.cards;
		},
		addCard: (state, action) => {
			if (state[action.payload.id]) {
				state[action.payload.id] = [
					...state[action.payload.id],
					action.payload.card,
				];
			} else {
				state[action.payload.id] = [action.payload.card];
			}
		},
		removeCard: (state, action) => {
			state[action.payload.id].splice(
				state[action.payload.id].indexOf(action.payload.card),
				1
			);
		},
		removeTopicCard: (state, action) => {
			delete state[action.payload];
		},
		updateCard: (state, action) => {
			state[action.payload.id][
				state[action.payload.id].indexOf(action.payload.cardId)
			] = action.payload.card;
		},
	},
});
export const { setCards, addCard, removeTopicCard, removeCard, updateCard } =
	CardSlice.actions;

export default CardSlice.reducer;

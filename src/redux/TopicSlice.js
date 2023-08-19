import { createSlice } from "@reduxjs/toolkit";

export const TopicSlice = createSlice({
  name: "topics",
  initialState: [],
  reducers: {
    addTopic: (state, action) => {
      state.push(action.payload);
    },
    removeTopic: (state, action) => {
      state.splice(action.payload, 1);
    },
    updateTopic: (state, action) => {
      state[state.indexOf(action.payload.id)] = action.payload.topic;
    },
  },
});

export const { addTopic, removeTopic, updateTopic } = TopicSlice.actions;

export default TopicSlice.reducer;

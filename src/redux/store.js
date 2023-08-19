import { configureStore } from "@reduxjs/toolkit";
import TopicSlice from "./TopicSlice";

const store = configureStore({
  reducer: {
    topic: TopicSlice,
  },
});

export default store;

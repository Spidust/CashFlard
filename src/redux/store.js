import { configureStore } from "@reduxjs/toolkit";
import TopicSlice from "./TopicSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedTopicReducer = persistReducer(persistConfig, TopicSlice);

const store = configureStore({
  reducer: {
    topic: persistedTopicReducer,
  },
});

export default store;

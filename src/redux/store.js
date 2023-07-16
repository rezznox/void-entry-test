import { configureStore } from "@reduxjs/toolkit";
import { leaderboardApi } from "./api/local";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { playerApi } from "./api/player";

const store = configureStore({
  reducer: {
    [leaderboardApi.reducerPath]: leaderboardApi.reducer,
    [playerApi.reducerPath]: playerApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(leaderboardApi.middleware).concat(playerApi.middleware),
});

setupListeners(store.dispatch)

export default store;

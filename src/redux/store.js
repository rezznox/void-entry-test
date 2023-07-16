import { configureStore } from "@reduxjs/toolkit";
import leaderboardSlice from "./slices/valorant/slices/leaderboard-slice";
import { leaderboardApi } from "./api/leaderboard";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const store = configureStore({
  reducer: {
    leaderboardSlice: leaderboardSlice.reducer,
    [leaderboardApi.reducerPath]: leaderboardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([leaderboardApi.middleware]),
});

setupListeners(store.dispatch)

export default store;

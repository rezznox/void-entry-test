import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playerLeaderboard: undefined,
};

export const valorantLeaderboardSlice = createSlice({
  name: "valorant_leaderboard_slice",
  initialState,
  reducers: {
    addToLeaderboard: (state, action) => {
      const leaderboard = state.playerLeaderboard ?? [];
      leaderboard.concat(action.payload);
    },
  },
});

export const { addToLeaderboard } = valorantLeaderboardSlice.actions;

export default valorantLeaderboardSlice.reducer;

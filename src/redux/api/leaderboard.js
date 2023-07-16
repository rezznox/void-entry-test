import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const leaderboardApi = createApi({
  reducerPath: "valorantLeaderboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/leaderboard`,
  }),

  endpoints: (builder) => ({
    getValorantLeaderboard: builder.query({
      query: ({start}) => ({url: `valorant?start=${start}`}),
      merge: (current, result) => {
        console.log('merge')
        console.log({current})
        current.players.push(...result)
      },
      forceRefetch({ currentArg, previousArg }) {
        console.log('reftech?', JSON.stringify(currentArg) !== JSON.stringify(previousArg))
        return JSON.stringify(currentArg) !== JSON.stringify(previousArg)
      }
    }),
  }),
});

export const {  useGetValorantLeaderboardQuery, useLazyGetValorantLeaderboardQuery } = leaderboardApi;

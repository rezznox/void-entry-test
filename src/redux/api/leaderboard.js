import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

/* const generateQueryStr = (baseString, query) => {
  const queryString =
    baseString +
    Object.entries(query)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

  return queryString;
}; */

export const leaderboardApi = createApi({
  reducerPath: "valorantLeaderboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `/api/leaderboard`,
  }),

  endpoints: (builder) => ({
    getValorantLeaderboard: builder.query({
      query: (start) => ({url: `valorant?start=${start}`}),
    }),
  }),
});

export const {  useGetValorantLeaderboardQuery, useLazyGetValorantLeaderboardQuery } = leaderboardApi;

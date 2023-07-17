import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const localApi = createApi({
  reducerPath: "localApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `/api`,
  }),

  endpoints: (builder) => ({
    getValorantLeaderboard: builder.query({
      query: ({ start }) => ({ url: `valorant/leaderboard?start=${start}` }),
      merge: (current, result) => {
        console.log("merge");
        console.log({ current });
        current.players.push(...result);
      },
      forceRefetch({ currentArg, previousArg }) {
        return JSON.stringify(currentArg) !== JSON.stringify(previousArg);
      },
    }),
    getValorantPlayer: builder.query({
      query: ({ id }) => ({ url: `valorant/player/${id}` }),
    }),
    getPosts: builder.query({
      query: ({ page, limit, search }) => ({
        url: `other/posts?page=${page}&limit=${limit}`,
      }),
    }),
    getPost: builder.query({
      query: ({ id }) => ({
        url: `other/posts/${id}`,
      }),
    }),
  }),
});

export const {
  useGetValorantLeaderboardQuery,
  useLazyGetValorantLeaderboardQuery,
  useGetValorantPlayerQuery,
  useLazyGetValorantPlayerQuery,
  useGetPostsQuery,
  useLazyGetPostsQuery,
  useGetPostQuery,
  useLazyGetPostQuery
} = localApi;

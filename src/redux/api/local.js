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
      query: ({ page, limit, search }) => {
        if (search) {
          return {
            url: `other/posts?page=${page}&limit=${limit}&search=${search}`,
          };
        } else {
          return {
            url: `other/posts?page=${page}&limit=${limit}`,
          };
        }
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (current, result, meta) => {
        if (meta.arg.reset) {
          current.posts = [];
        }
        current.posts.push(...result.posts);
      },
      forceRefetch({ currentArg, previousArg }) {
        if (previousArg === undefined) {
          return true;
        }
        const conditions = [
          currentArg.page !== previousArg.page,
          currentArg.limit !== previousArg.limit,
          currentArg.search !== previousArg.search,
        ];
        const shouldRefetch = conditions.reduce((acc, curr) => acc || curr, false);
        return shouldRefetch;
      },
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
  useLazyGetPostQuery,
} = localApi;

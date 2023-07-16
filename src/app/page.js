"use client";
import { ValorantTableLeaderboardWithInfiniteScroll } from "@/components/valorant/leaderboard-table";
import { useGetValorantLeaderboardQuery } from "@/redux/api/local";
import { useState } from "react";

export default function Home({ searchParams }) {
  const [start, setStart] = useState(1);
  const region = searchParams?.region || "na";
  const {
    players = [],
    error,
    isLoading,
  } = useGetValorantLeaderboardQuery(
    { start, region },
    {
      selectFromResult: ({ data, isSuccess, isLoading, error }) => {
        const players = isSuccess ? data.data.players.slice(0, 30) : [];
        return { isSuccess, isLoading, error, players };
      },
    }
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => setStart(start + 1)}>Add one</button>
      {isLoading && <div>Loading</div>}
      <ValorantTableLeaderboardWithInfiniteScroll
        list={players}
        region={region}
        next={() => console.log("next event")}
      ></ValorantTableLeaderboardWithInfiniteScroll>
    </main>
  );
}

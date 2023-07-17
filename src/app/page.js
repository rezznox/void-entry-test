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
    <main className="flex flex-col items-center justify-between">
      {isLoading && <div>Loading</div>}
      <ValorantTableLeaderboardWithInfiniteScroll
        list={players}
        region={region}
        next={() => console.log("next event")}
      ></ValorantTableLeaderboardWithInfiniteScroll>
    </main>
  );
}

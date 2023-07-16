"use client";
import { useGetValorantLeaderboardQuery } from "@/redux/api/leaderboard";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ValorantLeaderboardRow from "./components/valorant-leaderboard-row";
import ValorantTableLeaderboard from "./components/valorant-table-leaderboard";

export default function Home({ searchParams }) {
  const [start, setStart] = useState(1);
  const {
    players = [],
    error,
    isLoading,
    isSuccess,
  } = useGetValorantLeaderboardQuery(
    { start, region: searchParams?.region },
    {
      selectFromResult: ({ data, isSuccess, isLoading, error }) => {
        const players = isSuccess ? data.data.players.slice(0, 30) : [];
        return { isSuccess, isLoading, error, players };
      },
    }
  );

  return (
    <>
      {!!players.length && (
        <InfiniteScroll
          dataLength={players.length}
          hasMore={true}
          hasChildren={true}
          scrollThreshold={"100px"}
          next={() => console.log("next event")}
          loader={<h4>Loading...</h4>}
        >
          <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <button onClick={() => setStart(start + 1)}>Add one</button>
            <div style={{ background: "red", color: "white" }}>{error}</div>
            {isLoading && <div>Loading</div>}
            <ValorantTableLeaderboard
              players={players}
            ></ValorantTableLeaderboard>
          </main>
        </InfiniteScroll>
      )}
    </>
  );
}

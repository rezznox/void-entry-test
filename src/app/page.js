"use client";
import { useGetValorantLeaderboardQuery } from "@/redux/api/leaderboard";
import { useState } from "react";

export default function Home() {
  const [start, setStart] = useState(1);
  const { data, error, isLoading, isError } =
    useGetValorantLeaderboardQuery(start);
  const {
    data: { players },
  } = (!isError && !isLoading) ? data : { data: { players: undefined } };
  const playerUiList =
    players &&
    players.map((player, i) => (
      <div key={`${player.PlayerCardID} ${player.puuid} ${i}`} className="flex">
        <div>{player.leaderboardRank}</div>
        <div>{player.gameName}</div>
      </div>
    ));
  console.log(playerUiList);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ background: "red", color: "white" }}>{error}</div>
      {isLoading && <div>Loading</div>}
      {playerUiList}
    </main>
  );
}

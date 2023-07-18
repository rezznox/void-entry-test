import { NextResponse } from "next/server";

export async function GET(req, res) {
  const search = new URLSearchParams(req.url.split('?')[1]);
  const region = search.get('region');
  const start = search.get('start');

  const fetchLeaderBoard = async () => {
    return await (
      await fetch(
        `https://api.henrikdev.xyz/valorant/v2/leaderboard/${
          region ?? "na"
        }?start=${start}`,
        { method: "GET" }
      )
    ).json();
  };
  const data = await fetchLeaderBoard();

  return NextResponse.json({ data });
}

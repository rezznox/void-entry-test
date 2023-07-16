import { NextResponse } from "next/server";

const parsePaginationParams = (searchParams, selectOther) => {
  const { start: startP } = searchParams;
  const startInt = parseInt(startP);
  const start = isNaN(startInt) ? 0 : startInt;
  return { start };
};

export async function GET(req, res) {
  const { region, start } = parsePaginationParams(
    req.nextUrl.searchParams,
    (params) => ({ region: params.region })
  );

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
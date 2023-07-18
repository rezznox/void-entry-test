import { NextResponse } from "next/server";

export async function GET(req, res) {
  
  const {
    pathname
  } = req.nextUrl;
  const [region, name, tag] = pathname.split('/').slice(-1)[0].split("-");

  const fetchPlayerMatches = async () => {
    return await (
      await fetch(
        `https://api.henrikdev.xyz/valorant/v3/matches/${region}/${name}/${tag}`,
        { method: "GET" }
      )
    ).json();
  };

  const fetchPlayerProfile = async () => {
    return await (
      await fetch(
        `https://api.henrikdev.xyz/valorant/v1/account/${name}/${tag}`,
        { method: "GET" }
      )
    ).json();
  };
  const data = (await Promise.all([fetchPlayerMatches(), fetchPlayerProfile()]));
  
  return NextResponse.json({ matches: data[0].data, profile: data[1].data });
}

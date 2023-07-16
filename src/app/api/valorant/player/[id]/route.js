import { NextResponse } from "next/server";

export async function GET(req, res) {
  
  const {
    pathname
  } = req.nextUrl;
  console.log('checkpint 1')

  const [region, name, tag] = pathname.split('/').slice(-1)[0].split("-");

  const fetchPlayerMatches = async () => {
    return await (
      await fetch(
        `https://api.henrikdev.xyz/valorant/v3/matches/${region}/${name}/${tag}`,
        { method: "GET" }
      )
    ).json();
  };
  console.log('checkpint 2')
  const data = await fetchPlayerMatches();
  
  console.log('checkpint 3')

  return NextResponse.json({ matches: data.data });
}

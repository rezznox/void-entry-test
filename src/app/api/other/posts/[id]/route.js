import { NextResponse } from "next/server";

export async function GET(req, res) {
  const { pathname } = req.nextUrl;
  const id = pathname.split("/").slice(-1)[0];

  const fetchPost = async () => {
    return await (
      await fetch(
        `https://6396aee2a68e43e41808fa18.mockapi.io/api/posts/${id}`,
        { method: "GET" }
      )
    ).json();
  };
  const data = await fetchPost();

  return NextResponse.json({ data });
}

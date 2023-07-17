import { NextResponse } from "next/server";

export async function GET(req, res) {
  const search = new URLSearchParams(req.nextUrl.pathname);
  const page = search.get('page');
  const limit = search.get('limit');
  const postText = search.get('search');
  const url = new URL('https://6396aee2a68e43e41808fa18.mockapi.io/api/posts');
  if (postText !== null) {
    url.searchParams.append('postText', postText);
  }
  if (limit !== null) {
    url.searchParams.append('limit', limit);
  } else {
    url.searchParams.append('limit', 5);
  }
  if (page !== null) {
    url.searchParams.append('page', page);
  } else {
    url.searchParams.append('page', 1);
  }

  const fetchPosts = async () => {
    return await (
      await fetch(
        url.toString(),
        { method: "GET" }
      )
    ).json();
  };
  const data = await fetchPosts();

  return NextResponse.json({ posts: data });
}

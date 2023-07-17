"use client";
import { useGetPostsQuery } from "@/redux/api/local";

export default function PostsPage(props) {
  const {
    searchParams: { page = 1, limit = 10, search },
  } = props;

  const { data } = useGetPostsQuery({ page, limit, search });

  console.log(data);

  return <>Posts Page</>;
}

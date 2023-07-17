"use client";
import { useGetPostQuery } from "@/redux/api/local";

export default function PostPage({ params: { id } }) {

  const { data } = useGetPostQuery({ id });

  console.log(data);

  return <>PostPage</>;
}

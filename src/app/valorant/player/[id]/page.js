"use client";
import { ValorantMatchesTableWithInfiniteScroll } from "@/components/valorant/matches-table";
import { useGetValorantPlayerQuery } from "@/redux/api/local";

export default function ValorantPlayerProfile({ params: { id } }) {
  const { data, error, isLoading } = useGetValorantPlayerQuery({ id });
  const [, name, tag] = id.split("-");

  const matches = (data && data.matches) || [];

  return (
    <ValorantMatchesTableWithInfiniteScroll
      list={matches}
      playerName={name}
      playerTag={tag}
    ></ValorantMatchesTableWithInfiniteScroll>
  );
}

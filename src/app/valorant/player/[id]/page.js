"use client";
import { AppLoaderWholeScreen } from "@/components/loader";
import ValorantMatchesTable from "@/components/valorant/matches-table";
import ValorantPlayerCard from "@/components/valorant/player-card";
import { useGetValorantPlayerQuery } from "@/redux/api/local";

export default function ValorantPlayerProfile({ params: { id } }) {
  const { data, error, isLoading } = useGetValorantPlayerQuery({ id });
  const [, name, tag] = id.split("-");

  const matches = (data && data.matches) || [];
  const profile = (data && data.profile) || {};

  return (
    <>
      {!!profile.card && (
        <>
          <ValorantPlayerCard profile={profile} />
          <ValorantMatchesTable
            list={matches}
            playerName={name}
            playerTag={tag}
          ></ValorantMatchesTable>
        </>
      )}
      {!profile.card &&
        <AppLoaderWholeScreen sub={64}/>
      }
    </>
  );
}

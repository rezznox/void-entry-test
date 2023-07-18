"use client";
import { calculateMinDisplayHeightCss } from "@/components/constants";
import { AppLoaderWholeScreen } from "@/components/loader";
import { ValorantTableLeaderboardWithInfiniteScroll } from "@/components/valorant/leaderboard-table";
import { useGetValorantLeaderboardQuery } from "@/redux/api/local";
import { usePathname, useRouter } from "next/navigation";

export default function Home(props) {
  const {
    searchParams: { region = "na", start = 1 },
  } = props;

  const router = useRouter();
  const pathname = usePathname();

  const { players = [], isLoading } = useGetValorantLeaderboardQuery(
    { start, region },
    {
      selectFromResult: ({ data, isSuccess, isLoading, error }) => {
        const players = isSuccess ? data.data.players.slice(0, 1500) : [];
        return { isSuccess, isLoading, error, players };
      },
    }
  );

  const next = () => {
    router.push(`${pathname}?start=${Number(start) + players.length}`);
  };

  return (
    <main className="flex flex-col items-center justify-between">
      {players.length === 0 && <AppLoaderWholeScreen sub={64}/>}
      {players.length > 0 && (
        <ValorantTableLeaderboardWithInfiniteScroll
          list={players}
          region={region}
          next={next}
          height={calculateMinDisplayHeightCss(64)}
        ></ValorantTableLeaderboardWithInfiniteScroll>
      )}
    </main>
  );
}

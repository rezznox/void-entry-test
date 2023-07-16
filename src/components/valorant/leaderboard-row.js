import { useRouter } from "next/navigation";

export default function ValorantLeaderboardRow({ player, region }) {
  const router = useRouter();
  const transitionToPlayerProfile = (player) => () =>
    router.push(`/valorant/player/${region}-${player.gameName}-${player.tagLine}`);

  return (
    <tr onClick={transitionToPlayerProfile(player)}>
      <td>{player.leaderboardRank}</td>
      <td>{player.gameName}</td>
      <td>{player.numberOfWins}</td>
      <td>{player.rankedRating}</td>
    </tr>
  );
}

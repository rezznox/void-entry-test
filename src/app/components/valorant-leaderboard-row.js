import { useRouter } from "next/navigation";

export default function ValorantLeaderboardRow({ player }) {
  const router = useRouter();
  const transitionToPlayerProfile = (playerId) => () =>
    router.push(`/valorant/player/${playerId}`);

  return (
    <tr onClick={transitionToPlayerProfile(player.PlayerCardID)}>
      <td>{player.leaderboardRank}</td>
      <td>{player.gameName}</td>
      <td>{player.numberOfWins}</td>
      <td>{player.rankedRating}</td>
    </tr>
  );
}

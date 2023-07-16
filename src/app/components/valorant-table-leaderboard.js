import {
  createStyles,
  Table,
  Progress,
  Anchor,
  Text,
  Group,
  ScrollArea,
  rem,
} from "@mantine/core";
import ValorantLeaderboardRow from "./valorant-leaderboard-row";

export default function ValorantTableLeaderboard({ players = [] }) {
  return (
    <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>Victories</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {players.length &&
          players.map((player, i) => (
            <ValorantLeaderboardRow
              key={`${player.PlayerCardID} ${player.puuid} ${i}`}
              player={player}
            ></ValorantLeaderboardRow>
          ))}
      </tbody>
    </Table>
  );
}

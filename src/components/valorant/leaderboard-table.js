import {
  Table
} from "@mantine/core";
import ValorantLeaderboardRow from "./leaderboard-row";
import withInfiniteScroll from "../with-infinite-scroll";

export default function ValorantTableLeaderboard({ list = [], region }) {
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
        {list.length > 0 && list.map((player, i) => (
            <ValorantLeaderboardRow
              key={`${player.PlayerCardID} ${player.puuid} ${i}`}
              player={player}
              region={region}
            ></ValorantLeaderboardRow>
          ))}
      </tbody>
    </Table>
  );
}

export const ValorantTableLeaderboardWithInfiniteScroll = withInfiniteScroll(ValorantTableLeaderboard);
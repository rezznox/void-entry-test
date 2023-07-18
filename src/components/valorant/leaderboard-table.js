import {
  Table, createStyles
} from "@mantine/core";
import ValorantLeaderboardRow from "./leaderboard-row";
import withInfiniteScroll from "../with-infinite-scroll";

const useStyles = createStyles((theme) => ({
  leaderboard: {
    textAlign: 'left'
  }
}));

export default function ValorantTableLeaderboard({ list = [], region }) {

  const {classes} = useStyles();
  return (
    <Table sx={{ minWidth: 400 }} verticalSpacing="xs" className={classes.leaderboard}>
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
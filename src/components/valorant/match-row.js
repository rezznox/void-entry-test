import { createStyles } from "@mantine/core";
import { intervalToDuration } from "date-fns";

const useStyles = createStyles(() => ({
  Victory: {
    color: "green",
    fontWeight: "bold",
  },
  Defeat: {
    color: "red",
    fontWeight: "bold",
  },
}));

export default function ValorantMatchRow({ match, playerName, playerTag }) {
  const { classes } = useStyles();
  const player = match.players.all_players.find(
    (x) => x.name === playerName && x.tag === playerTag
  );
  const status = match.teams[player.team.toLowerCase()].has_won
    ? "Victory"
    : "Defeat";
  const {
    stats: { kills, assists, deaths },
  } = player;
  const duration = intervalToDuration({
    start: 0,
    end: match.metadata.game_length * 1000,
  });

  return (
    <tr>
      <td>{match.metadata.map}</td>
      <td className={classes[status]}>{status}</td>
      <td>{`${kills}/${deaths}/${assists}`}</td>
      <td>{player.character}</td>
      <td>{`${duration.hours}:${duration.minutes}:${duration.seconds}`}</td>
      <td>{match.metadata.game_start_patched}</td>
    </tr>
  );
}

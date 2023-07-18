import { Table, createStyles } from "@mantine/core";
import ValorantMatchRow from "./match-row";
import withInfiniteScroll from "../with-infinite-scroll";

const useStyles = createStyles((theme) => ({
  matchesTable: {
    textAlign: "left",
  },
}));

export default function ValorantMatchesTable({
  list = [],
  playerName,
  playerTag,
}) {
  
  const {classes} = useStyles();
  return (
    <Table verticalSpacing="xs" className={classes.matchesTable}>
      <thead>
        <tr>
          <th>Map</th>
          <th>Status</th>
          <th>KDA</th>
          <th>Agent</th>
          <th>Duration</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {!!list.length &&
          list.map((match) => (
            <ValorantMatchRow
              key={`${match.metadata.matchid}`}
              match={match}
              playerTag={playerTag}
              playerName={playerName}
            ></ValorantMatchRow>
          ))}
      </tbody>
    </Table>
  );
}

export const ValorantMatchesTableWithInfiniteScroll = withInfiniteScroll(ValorantMatchesTable);

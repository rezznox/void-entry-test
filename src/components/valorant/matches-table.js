import {
    Table
  } from "@mantine/core";
import ValorantMatchRow from "./match-row";
  
  export default function ValorantMatchesTable({ matches = [], playerName, playerTag }) {
    return (
      <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
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
          {!!matches.length &&
            matches.map((match) => (
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
  
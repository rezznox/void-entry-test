import { Avatar, Flex, Group, Text, Title, rem } from "@mantine/core";
import { regions } from "../constants";

export default function ValorantPlayerCard({ profile }) {
  return (
    <Group p={rem(20)}>
      <Avatar src={profile.card.small} size={80}></Avatar>
      <Flex direction="column">
        <Title>
          {profile.name}
        </Title>
        <Text>
          <b>Level: </b>
          {profile.account_level}
        </Text>
        <Text>
          <b>Tag: </b>
          {profile.tag}
        </Text>
        <Text>
          <b>Region: </b>
          {regions[profile.region]}
        </Text>
      </Flex>
    </Group>
  );
}

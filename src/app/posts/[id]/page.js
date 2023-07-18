"use client";
import { AppLoaderWholeScreen } from "@/components/loader";
import { useGetPostQuery } from "@/redux/api/local";
import {
  Avatar,
  Container,
  Flex,
  Grid,
  Group,
  SimpleGrid,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import { format } from "date-fns";

const useStyle = createStyles((theme) => ({
  authorSection: {
    alignItems: "flex-start",
  },
}));

export default function PostPage({ params: { id } }) {
  const { data } = useGetPostQuery({ id });

  const post = (data && data.data) || {};
  const { classes } = useStyle();
  const formattedDate =
    (!!post.createdAt &&
      format(new Date(post.createdAt), "dd/MM/yyyy HH:mm OOOO")) ||
    "";

  return (
    <>
      {!!post.id && (
        <Container my="md">
          <SimpleGrid
            cols={2}
            spacing="sm"
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <Grid gutter="sm">
              <Group spacing="sm" className={classes.authorSection} py={"sm"}>
                <Flex align={"center"} justify={"space-evenly"}>
                  <Avatar size={80} src={post.authorAvatar} radius={80} />
                  <Flex direction={"column"} ml={rem(10)}>
                    <Text fz="sm" fw={500}>
                      {post.authorName}
                    </Text>
                    <Text fz="xs" c="dimmed">
                      {formattedDate}
                    </Text>
                  </Flex>
                </Flex>
              </Group>
            </Grid>
            <Grid gutter="md">
              <Avatar size={400} radius={10} src={post.postImage}></Avatar>
              <Text my={rem(10)}>{post.postText}</Text>
            </Grid>
          </SimpleGrid>
        </Container>
      )}
      {!post.id && <AppLoaderWholeScreen sub={64} />}
    </>
  );
}

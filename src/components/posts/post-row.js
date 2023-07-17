import {
  Avatar,
  Badge,
  Group,
  Select,
  Text,
  createStyles,
} from "@mantine/core";
import { format } from "date-fns";
import Link from "next/link";

const useStyle = createStyles((theme) => ({
  contentSection: {
    flexFlow: "flex-row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "nowrap",
  },
  authorSection: {
    justifyContent: "center",
  },
  authorText: {
    textAlign: "center",
  },
}));

export default function PostRow({ post }) {
  const { classes } = useStyle();
  const formattedDate = format(new Date(post.createdAt), "dd/MM/yyyy HH:mm OOOO");
  return (
    <tr key={post.id}>
      <td>
        <Group spacing="sm" className={classes.authorSection}>
          <Avatar size={80} src={post.authorAvatar} radius={40} />
          <div className={classes.authorText}>
            <Text fz="sm" fw={500}>
              {post.authorName}
            </Text>
            <Text fz="xs" c="dimmed">
              {formattedDate}
            </Text>
          </div>
        </Group>
      </td>

      <td>
        <Group spacing="sm" className={classes.contentSection}>
          <Link href={`/posts/${post.id}`}>
            <Text>{post.postText}</Text>
          </Link>
          <Link href={`/posts/${post.id}`}>
            <Avatar size={120} radius={10} src={post.postImage}></Avatar>
          </Link>
        </Group>
      </td>
    </tr>
  );
}

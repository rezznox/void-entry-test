import { Table } from "@mantine/core";
import PostRow from "./post-row";
import withInfiniteScroll from "../with-infinite-scroll";

export default function PostTable({ list }) {

    return (
    <Table sx={{ minWidth: 600 }} verticalSpacing="xs">
      <thead>
        <tr>
          <th>Author</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        {list.length > 0 &&
          list.map((post, i) => (
            <PostRow key={`${post.id}`} post={post}></PostRow>
          ))}
      </tbody>
    </Table>
  );
}

export const PostTableWithInfiniteScroll = withInfiniteScroll(PostTable); 
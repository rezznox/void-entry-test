import { Table } from "@mantine/core";
import PostRow from "./post-card";

export default function PostTable({ list }) {
  
    

    return (
    <Table sx={{ minWidth: 800 }} verticalSpacing="xs">
      <thead>
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

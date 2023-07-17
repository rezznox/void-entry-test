"use client";
import { PostTableWithInfiniteScroll } from "@/components/posts/post-table";
import { useGetPostsQuery } from "@/redux/api/local";
import { usePathname, useRouter } from "next/navigation";

export default function PostsPage(props) {
  const {
    searchParams: { page = 1, limit = 5, search },
  } = props;

  const router = useRouter();
  const pathname = usePathname();

  const { data } = useGetPostsQuery({ page, limit, search });

  const posts = (data && data.posts) || [];

  const next = () =>
    router.push(`${pathname}?page=${+page + 1}&limit=${limit}`);

  return (
    <div>
      <PostTableWithInfiniteScroll list={posts} next={next} />
    </div>
  );
}

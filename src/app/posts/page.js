"use client";
import { AppLoaderWholeScreen } from "@/components/loader";
import { PostTableWithInfiniteScroll } from "@/components/posts/post-table";
import { useGetPostsQuery } from "@/redux/api/local";
import { TextInput, rem } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PostsPage(props) {
  const {
    searchParams: { page = 1, limit = 5, search = "" },
  } = props;

  const [reset, setReset] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const { data } = useGetPostsQuery({ page, limit, search, reset });

  const posts = (data && data.posts) || [];

  const [value, setValue] = useState(search);
  const [debounced] = useDebouncedValue(value, 500);

  useEffect(() => {
    if (debounced === value && debounced !== "") {
      setReset(true);
      router.push(`${pathname}?page=1&limit=${limit}&search=${debounced}`);
    }
  }, [debounced, value, limit, pathname, router]);

  const next = () => {
    setReset(false);
    if (search !== "") {
      router.push(
        `${pathname}?page=${Number(page) + 1}&limit=${limit}&search=${search}`
      );
    } else {
      router.push(`${pathname}?page=${Number(page) + 1}&limit=${limit}`);
    }
  };

  return (
    <>
      {posts.length > 0 && (
        <>
          <TextInput
            label="Search posts"
            value={value}
            onChange={({ currentTarget: { value: val } }) => setValue(val)}
            py={rem(10)}
          />
          <PostTableWithInfiniteScroll list={posts} next={next} />
        </>
      )}
      {posts.length === 0 && <AppLoaderWholeScreen sub={64} />}
    </>
  );
}

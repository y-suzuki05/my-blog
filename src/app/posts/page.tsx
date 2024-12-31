import { Posts } from "@/app/posts/components/Posts";
import { getPosts } from "@/libs/getPosts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "記事一覧 | szyk-tech-blog",
  description: "これまでに執筆した記事の一覧ページです。",
};

export default async function Page() {
  const { posts } = await getPosts();

  if (!posts) {
    return <div>Loading...</div>;
  }

  return <Posts posts={posts} />;
}

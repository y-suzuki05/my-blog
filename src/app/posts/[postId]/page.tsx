import { getPosts } from "@/libs/getPosts";
import { getPostDetail } from "@/libs/getPostDetail";
import { PostDetail } from "@/app/posts/[postId]/components/PostDetail";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ postId: string }>;
};

export async function generateStaticParams(): Promise<{ postId: string }[]> {
  const { posts } = await getPosts();
  const paths = posts.map((post) => {
    return {
      postId: post.id,
    };
  });
  return [...paths];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostDetail((await params).postId);
  return {
    title: `${post.title} | szyk-tech-blog`,
    description: "記事詳細ページです",
  };
}

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const post = await getPostDetail((await params).postId);
  return <PostDetail post={post} />;
}

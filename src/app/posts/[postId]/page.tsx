import { getPosts } from "@/libs/getPosts";
import { getPostDetail } from "@/libs/getPostDetail";
import { PostDetail } from "@/app/posts/[postId]/components/PostDetail";

export async function generateStaticParams(): Promise<{ postId: string }[]> {
  const { posts } = await getPosts();
  const paths = posts.map((post) => {
    return {
      postId: post.id,
    };
  });
  return [...paths];
}

type Props = {
  params: Promise<{ postId: string }>;
};

export default async function Page({ params }: Props) {
  const post = await getPostDetail((await params).postId);
  return <PostDetail post={post} />;
}

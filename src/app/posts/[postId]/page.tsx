import { getPosts } from "@/libs/getPosts";
import { getPostDetail } from "@/libs/getPostDetail";

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
  return (
    <>
      <div>{post.title}</div>
      <div
        dangerouslySetInnerHTML={{
          __html: `${post.body}`,
        }}
      />
    </>
  );
}

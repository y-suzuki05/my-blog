import { getDetail, getPosts } from "@/libs/client";

export async function generateStaticParams() {
  const { posts } = await getPosts();
  const paths = posts.map((post) => {
    return {
      postId: post.id,
    };
  });
  return [...paths];
}

export default async function Page({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getDetail(postId);
  return (
    <>
      <div>{post.title}</div>
      <div
        dangerouslySetInnerHTML={{
          __html: `${post.body}`,
        }}
      />
    </>
  )
}

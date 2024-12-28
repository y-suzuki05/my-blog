import { getDetail, getPosts } from "@/libs/client";

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
  const post = await getDetail((await params).postId);
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

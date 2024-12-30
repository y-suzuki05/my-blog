import { getPosts } from "@/libs/getPosts";
import { Top } from "@/app/(top)/components/Top";

export default async function Home() {
  const { posts } = await getPosts();

  if (!posts) {
    return <div>Loading...</div>;
  }

  return <Top posts={posts} />;
}

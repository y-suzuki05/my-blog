import { Posts } from "@/app/posts/components/Posts";
import { getPosts } from "@/libs/getPosts";

export default async function Page() {
  const { posts } = await getPosts();

  if (!posts) {
    return <div>Loading...</div>;
  }

  return <Posts posts={posts} />;
}

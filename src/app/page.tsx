import { getPosts } from "@/libs/client";

export default async function Home() {
  const { posts } = await getPosts();

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <div
              dangerouslySetInnerHTML={{
                __html: `${post.body}`,
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

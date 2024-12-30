import { Post } from "@/types/post";

type Props = {
  posts: Post[];
}

export const Top = ({ posts }: Props) => {
  console.log(posts);
  return (
    <div>
      <h2>トップ</h2>
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
  )
}
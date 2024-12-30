import { Post } from "@/types/post";
import { PostCard } from "@/components/card/PostCard";

type Props = {
  posts: Post[];
};

export const Posts = ({ posts }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold px-4">記事一覧</h2>
      <div className="mx-auto px-4 py-12 max-w-5xl">
        <ul className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
      </div>
    </div>
  );
};

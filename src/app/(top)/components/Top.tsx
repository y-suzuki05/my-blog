import { Post } from "@/types/post";
import { PostCard } from "@/components/card/PostCard";

type Props = {
  posts: Post[];
};

export const Top = ({ posts }: Props) => {
  return (
    <div>
      <h2 className="font-bold px-4">トップ</h2>
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

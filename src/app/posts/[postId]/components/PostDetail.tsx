import { Post } from "@/types/post";
import { formatDate } from "@/utils/format-date";

type Props = {
  post: Post;
};

export const PostDetail = ({ post }: Props) => {
  return (
    <div className="mx-auto px-4 py-12 max-w-5xl">
      <h2 className="text-center text-3xl font-bold sm:text-4xl">
        {post.title}
      </h2>
      <p className="my-8 text-sm text-right">
        公開日：{formatDate(post.publishedAt)}
      </p>
      <div
        className="prose prose-lg prose-gray mx-auto"
        dangerouslySetInnerHTML={{
          __html: `${post.body}`,
        }}
      />
    </div>
  );
};

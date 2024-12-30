import { Post } from "@/types/post";
import { formatDate } from "@/utils/format-date";

type Props = {
  post: Post;
};

export const PostCard = ({ post }: Props) => {
  return (
    <li>
      <a
        href={`/posts/${post.id}`}
        className="p-6 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 h-full flex flex-col justify-between min-h-[250px]"
      >
        <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
          {post.title}
        </h3>
        <p className="font-normal text-gray-700 text-right text-sm">
          作成日：{formatDate(post.createdAt)}
        </p>
      </a>
    </li>
  );
};

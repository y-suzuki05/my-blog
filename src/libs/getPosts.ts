import { client } from "./client";
import { Post } from "@/types/post";

/**
 * ブログ一覧を取得する
 */
export const getPosts = async () => {
  const posts = await client.getList<Post>({
    endpoint: "posts",
  });

  return {
    posts: posts.contents,
  };
};

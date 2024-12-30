import { client } from "./client";
import { Post } from "@/types/post";

/**
 * ブログ記事詳細を取得する
 */
export const getPostDetail = async (contentId: string) => {
  const post = await client.getListDetail<Post>({
    endpoint: "posts",
    contentId,
  });
  return post;
};

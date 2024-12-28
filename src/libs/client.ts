import { createClient } from 'microcms-js-sdk';

export type Post = {
    id: string;
    title: string;
    body: string;   
}

if (!process.env.SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.API_KEY) {
    throw new Error("API_KEY is required");
}

export const client = createClient({
    serviceDomain: process.env.SERVICE_DOMAIN || '',
    apiKey: process.env.API_KEY || '',
});

// ブログ一覧を取得
export const getPosts = async () => {
    const posts = await client.getList<Post>({
    endpoint: "posts"
    });
    return {
      posts: posts.contents
    }
}

// ブログの詳細を取得
export const getDetail = async (contentId: string) => {
    const post = await client.getListDetail<Post>({
        endpoint: "posts",
        contentId,
    });
    return post;
};
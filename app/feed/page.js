import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

// export const metadata = {
//   title: "something",
//   description: "something",
// };

export const generateMetadata = async ({ params, searchParams }) => {
  const posts = await getPosts();
  const numberOfPosts = posts.length;
  return {
    title: `posts-${numberOfPosts}`,
    description: "lulu",
  };
};

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}

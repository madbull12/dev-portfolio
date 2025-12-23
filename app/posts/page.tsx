import PostsList from "@/components/blog/posts-list";
import PageWrapper from "@/components/ui/page-wrapper";
import { getAllPosts } from "@/lib/posts";
import { Metadata } from "next";
export const metadata:Metadata = {
  title: "Posts | Andrian Lysander",
  description:"Read my posts"
}
const BlogPage = () => {
  const posts = getAllPosts();
  console.log(posts)
  // const mappedPosts = posts.map((post) => ({
  //   ...post,
  //   link: post.slug,
  // }));
  return (
    <PageWrapper>
      <PostsList posts={posts} />
    </PageWrapper>
  );
};

export default BlogPage;

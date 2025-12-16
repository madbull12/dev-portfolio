import { notFound } from "next/navigation";
import { allPosts } from "content-collections";
import { mdxComponents } from "@prose-ui/next";
import { MDXContent } from "@content-collections/mdx/react";
import PageWrapper from "@/components/ui/page-wrapper";
import { getAllPosts } from "@/lib/posts";

type Params = Promise<{ path: string[] }>;
type PageProps = {
  params: Params;
};

const findPage = (pathArr: string[]) => {
  const path = pathArr ? `${pathArr.join("/")}` : "/";
  console.log("Path: ", path);
  console.log(allPosts);

  return allPosts.find((page) => page._meta.fileName === `${path}.mdx`);
};

const findPost = async (pathArr: string[]) => {
  const path = pathArr ? `${pathArr.join("/")}` : "/";
  const posts = await getAllPosts();
  const post = posts.find((post) => post.slug === path);
  return post;
};

export async function generateStaticParams() {
  return allPosts.map((page) => ({
    path: page._meta.path.slice(1).split("/"),
  }));
}

export default async function Page({ params }: PageProps) {
  const { path } = await params;
  let page = findPage(path);
  const post = await findPost(path);

  console.log("PAGE:", page)
  if (!page) notFound();

  return (
    <PageWrapper>
      <article className="prose-ui bg-transparent prose-bg-transparent relative z-50  w-full max-w-5xl mx-auto">
        <header className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-zinc-900 transition-colors dark:text-white">
            {post?.title}
          </h1>
          <p className="text-zinc-700 transition-colors dark:text-zinc-300">
            {post?.datetime && (<span>
              {new Date(post?.datetime).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
            )}
            
          </p>
          <div className="mt-1 flex gap-4">
            {post?.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:bg-zinc-800 dark:hover:text-zinc-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>
        <MDXContent code={page.mdx} components={mdxComponents} />
      </article>
    </PageWrapper>
  );
}

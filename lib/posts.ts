import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");
// or path.join(process.cwd(), "posts");

// export type Post = {
//   slug: string;
//   title: string;
//   datetime: Date;
//   description:string;
//   tags:string[]
//   [key: string]: any;
// };

export function getAllPosts(): Post[] {
  const files = fs.readdirSync(postsDirectory);

  const posts:Post[] = files
    .filter((file) => file.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      const slug = filename.replace(".mdx", "");

      return {
        slug,
        title:data.title,
        content:data.content,
        description:data.description,
        datetime:data.datetime,
        tags:data.tags
      };
    })
    .sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());

  return posts;
}

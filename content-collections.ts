import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import { remarkPlugins } from "@prose-ui/core";
const posts = defineCollection({
  name: "posts",
  directory: "content",
  include: "**/*.mdx",
  schema: z.object({
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: remarkPlugins(),
    });
    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [posts],
});

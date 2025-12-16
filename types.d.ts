type PostMetadata = {
  title: string;
  datetime: string;
  description: string;
  tags?: string[];
};

type Post = PostMetadata & {
  slug: string;
  content: string;
};

"use client"

import { HoverEffect } from "@/components/ui/card-hover-effect"

interface PostsListProps {
    posts:Post[]
}
const PostsList = ({ posts }: PostsListProps) => {
  return (
    <HoverEffect items={posts} />

  )
}

export default PostsList
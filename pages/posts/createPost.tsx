import Link from "next/link";
import * as React from "react";

export interface CreatePostProps {}

export default function CreatePost(props: CreatePostProps) {
  return (
    <div>
      Create Post
      <Link href="/about">Go to About</Link>
    </div>
  );
}

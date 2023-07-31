import { link } from "fs";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import React from "react";

export interface Props {
  posts: any[];
}

export default function Post({ posts }: Props) {
  return (
    <div>
      <h1>
        Posts Page
        <ul>
          {posts.map((data: any) => (
            <li className="text-sm" key={data.id}>
              <Link href={`/posts/${data.id}`}>{data.title}</Link>
            </li>
          ))}
        </ul>
      </h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  // server-side
  // build-time

  const res = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );

  const data = await res.json();

  return {
    props: {
      posts: data.data,
    },
  };
};

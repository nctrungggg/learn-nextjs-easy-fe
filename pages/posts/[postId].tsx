import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import * as React from "react";

export interface PostDetail {
  post: any;
}

export default function CreatePost({ post }: PostDetail) {

  return <div>{post.title}</div>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );

  const data = await res.json();

  return {
    paths: [
      data.data.map((post: any) => ({
        params: { postId: post.id },
      })),
    ],

    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostDetail> = async (
  context: GetStaticPropsContext
) => {
  // server-side
  // build-time

  const postId = context.params?.postId;

  if (!postId) return { notFound: true };

  const res = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );

  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
};

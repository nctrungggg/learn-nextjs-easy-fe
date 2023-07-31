import Header from "@/components/header";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function About() {
  const [postList, setPostList] = useState([]);
  const router = useRouter();
  const page = Number(router.query?.page) || 1 ;

  useEffect(() => {
    if (!page) return;

    (async () => {
      const res = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
      );

      const data = await res.json();

      setPostList(data.data);
    })();
  }, [page]);

  const handleClick = () => {
    router.push(
      {
        pathname: "/about",
        query: {
          page: page + 1,
        },
      },
      undefined,
      {
        shallow: true,
      }
    );
  };

  return (
    <div>
      <Header />

      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={handleClick}>NEXT</button>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  console.log(123);

  return {
    props: {
      post: {},
    },
  };
};

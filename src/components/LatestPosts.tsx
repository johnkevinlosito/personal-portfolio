import React from "react";
import Container from "./Container";
import Link from "next/link";
import { format } from "date-fns";
import { Post } from "@/interfaces/post";

type PostsProps = {
  posts: Post[];
};
const LatestPosts = ({ posts }: PostsProps) => {
  return (
    <section className="my-40">
      <Container>
        <h2 className="gradient-text font-bold text-2xl md:text-3xl lg:text-4xl mt-14 pb-8">
          Latest Posts
        </h2>
        {posts.length > 0 ? (
          posts.map((post) => {
            return (
              <article key={post.slug} className="mb-16">
                <h2 className="text-xl font-bold md:text-2xl lg:text-3xl mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="underlined relative hover:gradient-text"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p>{post.description}</p>
                <div className="mt-2 flex justify-between md:items-center gap-2 flex-col md:flex-row">
                  <span className="px-2 py-1 bg-slate-600 text-slate-200 font-light rounded hover:bg-slate-500 text-sm w-max">
                    {post.categories.join(", ")}
                  </span>
                  <em className="text-sm">
                    Published on{" "}
                    {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
                  </em>
                </div>
              </article>
            );
          })
        ) : (
          <p className="mt-10">No Posts found</p>
        )}
      </Container>
    </section>
  );
};

export default LatestPosts;

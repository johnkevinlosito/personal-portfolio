import Container from "@/components/Container";
import { getAllPosts } from "@/lib/posts";
import { format } from "date-fns";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Blog by John Kevin Losito",
  description:
    "I try to make an effort to document my journey as a developer transitioning into cloud and devops in the form of blog posts. Here you find some of the articles I published over the years.",
  openGraph: {
    title: "Blog by John Kevin Losito",
    description:
      "I try to make an effort to document my journey as a developer transitioning into cloud and devops in the form of blog posts. Here you find some of the articles I published over the years.",
    images: [
      {
        url: "/assets/blog-og.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog by John Kevin Losito",
    description:
      "I try to make an effort to document my journey as a developer transitioning into cloud and devops in the form of blog posts. Here you find some of the articles I published over the years.",
    images: [
      {
        url: "/assets/blog-og.png",
      },
    ],
  },
};

const BlogPage = () => {
  const posts = getAllPosts();

  return (
    <Container>
      <h1 className="gradient-text font-bold text-3xl md:text-5xl lg:text-6xl pb-8 mt-8">
        Blog
      </h1>
      {posts.map((post) => {
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
            <p>{post.excerpt}</p>
            <div className="mt-2 flex justify-between md:items-center gap-2 flex-col md:flex-row">
              <span className="px-2 py-1 bg-slate-600 text-slate-200 font-light rounded hover:bg-slate-500 text-sm w-max">
                {post.categories?.join(", ")}
              </span>
              <em className="text-sm">
                Published on{" "}
                {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
              </em>
            </div>
          </article>
        );
      })}
    </Container>
  );
};

export default BlogPage;

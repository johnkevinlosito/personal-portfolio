import Container from "@/components/Container";
import { PostBody } from "@/components/PostBody";
import markdownToHtml from "@/lib/markdownToHtml";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { format } from "date-fns";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({ params }: PageProps) => {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }
  return {
    title: `${post?.title} - John Kevin Losito's Blog`,
    description: post?.description || post?.excerpt,
    openGraph: {
      title: `${post?.title} - John Kevin Losito's Blog`,
      description: post?.description || post?.excerpt,
      type: "article",
      images: [
        {
          url: post?.coverImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post?.title} - John Kevin Losito's Blog`,
      description: post?.description || post?.excerpt,
      images: [
        {
          url: post?.coverImage,
        },
      ],
    },
  };
};

const BlogPostPage = async ({ params }: PageProps) => {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <Container>
      <article className="lg:w-2/3 mx-auto">
        {post.coverImage && (
          <div className="relative h-52 sm:h-72 md:h-96">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill={true}
              className="rounded-md object-contain"
            />
          </div>
        )}
        <div className="mt-8">
          <span className="font-light text-xs">
            {format(new Date(post.publishedAt), "MMMM dd, yyyy")}
          </span>
          <h1 className="gradient-text text-3xl font-bold md:text-4xl lg:text-5xl pb-8 ">
            {post.title}
          </h1>
          <PostBody content={content} />
        </div>
      </article>
    </Container>
  );
};

export const generateStaticParams = async () => {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default BlogPostPage;

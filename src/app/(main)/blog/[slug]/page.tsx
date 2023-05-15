import Container from "@/components/Container";
import { ErrorFallback } from "@/components/ErrorFallback";
import { sanityClient } from "@/lib/sanity";
import { postsQuery } from "@/sanity/queries/posts";
import Post from "@/sanity/types/post";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

const getData = async (slug: string) => {
  const post: [Post] = await sanityClient.fetch(postsQuery(slug));

  return post[0];
};

export const generateMetadata = async ({ params }: PageProps) => {
  const post = await getData(params.slug);
  return {
    title: `${post?.title} - John Kevin Losito's Blog`,
    description: post?.excerpt,
  };
};

const BlogPostPage = async ({ params }: PageProps) => {
  const { slug } = params;

  try {
    const post = await getData(slug);

    return (
      <Container>
        <article className="lg:w-2/3 mx-auto">
          {post.mainImage && (
            <div className="relative h-96">
              <Image
                src={post.mainImage}
                alt={post.title}
                fill={true}
                className="rounded-md object-cover"
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
            <PortableText value={post.body} />
          </div>
        </article>
      </Container>
    );
  } catch (error) {
    return <ErrorFallback />;
  }
};

export const generateStaticParams = async () => {
  const query = groq`
		*[_type == 'post'] {
			"slug": slug.current
		}
	`;

  const slugs: Pick<Post, "slug">[] = await sanityClient.fetch(query);

  return slugs.map(({ slug }) => ({ slug }));
};

export default BlogPostPage;
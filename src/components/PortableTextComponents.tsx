import { PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient } from "@/lib/sanity";
import CodeBlock from "./CodeBlock";
import Link from "next/link";

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value).url()}
        alt={value.alt}
        className="block max-w-full mx-auto"
      />
    ),
    code: ({ value }) => {
      return <CodeBlock code={value.code} language={value.language} />;
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-6 list-disc space-y-2 py-4 text-lg">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="ml-6 mt-lg list-decimal space-y-2 py-4 text-lg">
        {children}
      </ol>
    ),
  },

  listItem: ({ children }) => (
    <li className="text-base leading-6">{children}</li>
  ),

  block: {
    h1: ({ children }) => (
      <h1 className="pt-4 text-5xl font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="pt-4 text-4xl font-bold">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="pt-4 text-3xl font-bold">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="pt-4 text-2xl font-bold">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="py-2 text-lg leading-8">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mx-4 my-4 rounded-md border-x-4 border-x-gray-500 bg-gray-300 px-4 py-2 font-serif text-lg italic dark:border-x-gray-100 dark:bg-gray-700">
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      if (!rel) {
        return (
          <Link
            href={value.href}
            className="underlined break-words relative border-b-2 border-gray-300 font-bold hover:border-b-0 dark:border-gray-700"
          >
            {children}
          </Link>
        );
      }

      return (
        <a
          href={value.href}
          rel={rel}
          target="_blank"
          className="underlined break-words relative font-bold"
        >
          {children}
        </a>
      );
    },
    span: ({ children }) => <span>{children}</span>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-200 dark:bg-gray-700 font-semibold text-sm p-1">
        {children}
      </code>
    ),
  },
};

export default components;

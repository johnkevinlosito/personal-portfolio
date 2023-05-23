"use client"; // Error components must be Client Components

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-col items-center gap-4">
      <h1 className="gradient-text text-3xl md:text-4xl lg:text-5xl mt-8 pb-4">
        Something went wrong
      </h1>
      <Image
        src="/assets/bug-fixing-animate.svg"
        alt=""
        loading="eager"
        height={300}
        width={450}
        className="max-w-full rounded-2xl object-cover lg:max-w-none aspect-square"
      />
      <p className="text-lg">
        Please try again later, or check that you are on the correct link.
      </p>

      <Link
        href="/"
        className="py-2 px-4 font-bold border hover:gradient-text rounded"
      >
        HOME
      </Link>
    </Container>
  );
}

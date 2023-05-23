import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <Container className="flex flex-col items-center gap-4">
      <h1 className="gradient-text text-3xl md:text-4xl lg:text-5xl mt-8 pb-4">
        Page not found
      </h1>
      <Image
        src="/assets/404-error-animate.svg"
        alt=""
        loading="eager"
        height={300}
        width={450}
        className="max-w-full rounded-2xl object-cover lg:max-w-none aspect-square"
      />
      <p className="text-lg">
        Sorry, we could not find the requested resource.
      </p>

      <Link
        href="/"
        className="py-2 px-4 font-bold border hover:gradient-text rounded"
      >
        HOME
      </Link>
    </Container>
  );
};

export default NotFound;

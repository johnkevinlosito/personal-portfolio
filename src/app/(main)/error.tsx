"use client"; // Error components must be Client Components

import Container from "@/components/Container";
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
    <Container>
      <h1 className="gradient-text text-3xl md:text-4xl lg:text-5xl mt-8 pb-4">
        Something went wrong
      </h1>
      <p className="text-lg">
        Please try again later, or check that you are on the correct link.
      </p>
    </Container>
  );
}

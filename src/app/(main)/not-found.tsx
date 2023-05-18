import Container from "@/components/Container";
import React from "react";

const NotFound = () => {
  return (
    <Container>
      <h1 className="gradient-text text-3xl md:text-4xl lg:text-5xl mt-8 pb-4">
        Page not found
      </h1>
      <p className="text-lg">Could not find requested resource.</p>
    </Container>
  );
};

export default NotFound;

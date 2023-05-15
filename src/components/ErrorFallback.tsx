import Container from "./Container";

export const ErrorFallback = () => {
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
};

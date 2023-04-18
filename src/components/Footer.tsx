import React from "react";
import Link from "next/link";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="mt-8 md:mt-20 py-8">
      <Container className="flex justify-between">
        <span>&copy; {new Date().getFullYear()} John Kevin Losito</span>
        <Link
          href="https://storyset.com/work"
          target="_blank"
          rel="noopener noreferrer"
        >
          Work illustrations by Storyset
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;

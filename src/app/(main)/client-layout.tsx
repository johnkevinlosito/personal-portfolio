"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
import React, { PropsWithChildren } from "react";

const ClientLayout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default ClientLayout;

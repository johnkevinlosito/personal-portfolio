import "@styles/globals.css";

import { PropsWithChildren } from "react";

export const metadata = {
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

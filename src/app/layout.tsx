import ClientLayout from "./client-layout";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-100 dark:bg-semi-black text-slate-600 dark:text-slate-200">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

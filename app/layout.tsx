
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "My First Website",
  description: "My first Next.js website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav style={{
          display: "flex",
          gap: "25px",
          padding: "20px",
          backgroundColor: "#eeeeee"
        }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}

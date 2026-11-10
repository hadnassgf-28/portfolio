
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hadung | Personal Portfolio",
  description: "Personal portfolio website - Hadung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}

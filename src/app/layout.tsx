import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "szyk-tech-blog",
  description: "技術ブログです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

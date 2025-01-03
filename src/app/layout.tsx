import type { Metadata } from "next";
import "@/app/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "szyk-tech-blog",
  description: "プログラミングやチーム開発に関する学びを共有するブログです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto max-w-7xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

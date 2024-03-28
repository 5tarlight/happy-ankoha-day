import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Happy Ankoha Day!",
  description: "안코하 사랑해요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta
          content="minimum-scale=1.0, width=device-width, maximum-scale=1, user-scalable=no"
          name="viewport"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pl-4 pr-4 min-h-full">{children}</main>
      </body>
    </html>
  );
}
